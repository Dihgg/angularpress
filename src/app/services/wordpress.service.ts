import { Injectable, Type } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders, HttpResponse } from '@angular/common/http';
import { LocationStrategy, Location } from '@angular/common';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from "rxjs/operators";
import { Params } from '@angular/router';
import { Post, User, MenuItem, Block, Media, Image, PostArgs, THEME, SearchRequest, SearchReponse, SearchItem } from '../services/wordpress.interface';
import { sanitizeHtml } from '../utils/utils';
import { Title } from '@angular/platform-browser';
import { rejects } from 'assert';

declare const BASE_HREF: string;

@Injectable({
  providedIn: 'root'
})
export class WordpressService {

  private URL: string;
  private context = "v2";
  private headers: HttpHeaders = new HttpHeaders();

  public static BASE_HREF: string = BASE_HREF;
  public THEME: THEME;
  public TRANSLATION: any;

  constructor(
    private http: HttpClient,
    private location: Location,
    private title: Title
  ) {    
    this.URL = `${WordpressService.BASE_HREF}/wp-json/wp/${this.context}/`;
  }

  /**
   * Insere no WordpressService as opções do wordpress
   * @param {THEME} options Objeto JSON com informações do tema 
   */
  public setTHEME(options: THEME): void {
    this.THEME = options;
  }

  /**
   * Insere as traduções no WordpressService
   * @param {any} translation JSON com a tradução
   */
  public setTRANSLATION(translation: any): void {
    this.TRANSLATION = translation;
  }

  /**
   * Wrapper do método get
   * @param {string} path caminho para REST API 
   * @param {Params} query Parâmetros URL GET
   */
  private get<T>(path: string, params: Params = {}): Observable<T> {
    return this.http.get<T>(`${this.URL}${path}`, {
      headers: this.headers,
      params: params
    });
  }

  private sanitizeHtml(str: string): string {
    return str.replace(/(<([^>]+)>)/ig, '');
  }

  private preparePost(post: any): Post {
    return {
      id: post.id,
      url: post.link,
      title: sanitizeHtml(post.title.rendered),
      date: post.date,
      date_formatted: post.date_formatted,
      excerpt: sanitizeHtml(post.excerpt.rendered),
      content: sanitizeHtml(post.content.rendered),
      blocks: post.blocks.map((block: any): Block => ({
        name: block.blockName,
        attrs: block.attrs,
        html: block.innerHTML
      })),
      author: post.author,
      thumbnail: post.featured_media || null
    }
  }

  /**
   * Recupera Posts
   * @param {Params} params Parâmetros para recuperação dos posts
   * @param {'posts' | 'pages'} type Tipo de post para recuperação
   * @returns {Observable<Post[]>} Retorna um observable com array de posts
   */
  public getPosts(params: PostArgs, type: 'posts' | 'pages' | string = 'posts'): Observable<Post[]> {
    return this.get<Post[]>(type, params).pipe(
      map((res: any) => {
        let posts: Post[] = [];
        res.forEach((post: any) => {
          posts.push(this.preparePost(post));
        });
        return posts;
      }),
      catchError(error => throwError(error))
    );
  }

  public getPost(id: string): Observable<Post> {
    return this.get<Post>(`posts/${id}`).pipe(
      map((post: any): Post => this.preparePost(post)),
      catchError(error => throwError(error))
    );
  }

  /**
   * Recupera Usuário
   * @param {number} id ID do usuário
   * @returns {Observable<User>} Retorna um observable com dados do usuário
   */
  public getUser(id: number): Observable<User> {
    return this.get<User>(`users/${id}`).pipe(
      map((res: any) => {
        return {
          id: res.id,
          name: res.name,
          link: res.link,
          slug: res.slug,
          avatar: res.avatar_urls['96']
        }
      }),
      catchError(error => throwError(error))
    );
  }

  private getMenuItem(item: any): MenuItem {
    return {
      ID: parseInt(item.ID),
      type: (item.post_type === 'custom') ? 'custom' : 'post',
      title: item.title,
      url: item.url,
      classes: item.classes,
      target: item.target || null
    }
  }

  /**
   * Recupera um Menu do Wordpress
   * @param {string} location Nome do menu
   * @returns {Observable<MenuItem[]>} Retorna um observable com uma lista de itens de menu
   */
  public getMenu(location: string): Observable<MenuItem[]> {
    return this.get<MenuItem>(`menu`, { location: location }).pipe(
      map((res: any) => {
        let items: MenuItem[] = [];
        if (!res) {
          return [];
        }
        res.forEach((item: any) => {
          if (parseInt(item.menu_item_parent)) {
            let index: number;
            items.forEach((obj: any, i: number) => {
              if (obj.ID === parseInt(item.menu_item_parent)) {
                index = i;
              }
            });
            if (items[index].items) {
              items[index].items.push(this.getMenuItem(item));
            } else {
              items[index].items = [this.getMenuItem(item)];
            }
          } else {
            items.push(this.getMenuItem(item));
          }
        });
        return items;
      }),
      catchError(error => throwError(error))
    );
  }

  /**
   * Recupera informações sobre uma mídia
   * @param {string} id id da mídia
   * @returns {Obeservable<Media>} Observable da resposta com uma mídia 
   */
  public getMedia(id: number): Observable<Media> {
    return this.get<Media>(`media/${id}`)
      .pipe(map((media: any): Media => {
        return {
          id: media.id,
          type: media.media_type,
          url: media.source_url,
          sizes: (() => {
            const images: Image[] = [];
            Object.getOwnPropertyNames(media.media_details.sizes).forEach((key: string) => {
              const image: any = media.media_details.sizes[key];
              images[key] = {
                size: key,
                width: image.width,
                height: image.height,
                url: image.source_url,
                alt: media.alt_text,
                caption: sanitizeHtml(media.caption.rendered)
              };
            });
            return images;
          })()
        }
      }),
        catchError(error => throwError(error))
      );
  }

  /**
   * Método para fazer busca na API do Wordpress
   * @param {SearchRequest} req Argumentos para o request 
   * @returns {Observable<SearchReponse[]} Obersable com um array de SearchResponse
   */
  public async search(req: SearchRequest): Promise<SearchReponse> {

    return new Promise<SearchReponse>((resolve, reject) => {
      this.http.get(`${this.URL}search`, {
        headers: this.headers,
        observe: 'response',
        params: req as Params
      }).toPromise().then((res: any) => {
        const items: SearchItem[] = [];
        res.body.forEach((result: any)=> {
          items.push({
            id: result.id,
            title: result.title,
            url: result.url,
            type: result.type,
            subtype: result.subtype
          });
        });
        const result: SearchReponse = {
          results: items,
          total: res.headers.get('X-WP-Total'),
          pages: res.headers.get('X-WP-TotalPages')
        };
        resolve(result);
      }).catch((err => reject(err)) );
    });

    /* return this.get<SearchReponse>(`search`, req)
      .pipe(map((res: any): SearchReponse[] => {
        const response: SearchReponse[] = [];
        res.forEach((item: any) => {
          response.push({
            id: item.id,
            title: item.title,
            url: item.url,
            type: item.type,
            subtype: item.subtype
          });
        });
        return response;
      }),
        catchError(error => throwError(error))
      ); */
  }

  /**
   * Traduz o tema
   * @param {string} label Label a ser traduzida
   * @returns {string} Retorna a tradução (se houver)
   */
  public translate(label: string): string {
    return this.TRANSLATION[label] || label;
  }

  /**
   * Modifica o título da página. Mantendo o título do blog no final
   * @param {string} title Título
   * @param {string} separator Separador
   */
  public setTitle(title: string, separator: string = ' | '): void {
    this.title.setTitle(`${title}${separator}${this.THEME.NAME}`);
  }

}
