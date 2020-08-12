import { Injectable, Type } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Location } from '@angular/common';
import { Observable, throwError, pipe } from 'rxjs';
import { map, catchError } from "rxjs/operators";
import { Params } from '@angular/router';
import { Post, User, MenuItem, Block, Media, Image, PostRequest, THEME, SearchRequest, SearchReponse, SearchItem, PostResponse, CategoriesResponse, CategoriesRequest, Category, TagRequest, TagResponse, Tag } from '../services/wordpress.interface';
import { sanitizeHtml } from '../utils/utils';
import { Title } from '@angular/platform-browser';
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
   * @returns {Promise<Post[]>} Uma Promise com array de posts
   */
  public async getPosts(params: PostRequest, type: 'posts' | 'pages' | string = 'posts'): Promise<PostResponse> {
    return new Promise<PostResponse>((resolve, reject) => {
      this.http.get(`${this.URL}${type}`, {
        headers: this.headers,
        observe: 'response',
        params: params as Params
      }).toPromise().then(res => {
        console.log('POST RESP', res);
        const response: PostResponse = {
          total: Number.parseInt(res.headers.get('X-WP-Total')),
          pages: Number.parseInt(res.headers.get('X-WP-TotalPages')),
          posts: (res.body as any[]).map(post => this.preparePost(post))
        }
        resolve(response);
      }).catch(err => reject(err));
    })
  }

  /**
   * Recupera um post via ID
   * @param {number} id Id do post
   */
  public async getPost(id: number): Promise<Post> {
    return new Promise<Post>((resolve, reject) => {
      this.get<Post>(`posts/${id}`)
        .toPromise()
        .then(post => resolve(this.preparePost(post)))
        .catch( err => reject(err) );
    });
  }

  /**
   * Recupera Usuário
   * @param {number} id ID do usuário
   * @returns {Observable<User>} Retorna um observable com dados do usuário
   */
  public async getUser(id: number): Promise<User> {
    return new Promise<User>((resolve, reject) => {
      this.get<User>(`users/${id}`)
        .toPromise()
        .then((user: any) => {
          resolve({
            id: user.id,
            name: user.name,
            link: user.link,
            slug: user.slug,
            avatar: user.avatar_urls['96']
          });
        })
        .catch(err => reject(err));
    });
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
   * @returns {Promise<MenuItem[]>} Retorna uma Promise com uma lista de itens de menu
   */
  public async getMenu(location: string): Promise<MenuItem[]> {
    return new Promise<MenuItem[]>((resolve, reject) => {
      this.get<MenuItem>('menu', {
        'location': location
      })
        .toPromise()
        .then((res: any) => {
          if (!res) {
            resolve([]);
          }
          const items: MenuItem[] = [];
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

          resolve(items);

        })
        .catch(err => reject(err));
    });
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
            if (media.media_details.sizes) {
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
            }
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
        res.body.forEach((result: any) => {
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
      }).catch((err => reject(err)));
    });
  }

  private prepareCategory(category: any): Category {
    return {
      id: category.id,
      count: category.count,
      name: category.name,
      description: category.description,
      link: category.link,
      slug: category.slug,
      taxonomy: category.taxonomy
    }
  }

  /**
   * 
   * @param req 
   */
  public async getCategories(req: CategoriesRequest): Promise<CategoriesResponse> {
    return new Promise<CategoriesResponse>((resolve, reject) => {
      this.http.get(`${this.URL}categories`, {
        headers: this.headers,
        observe: 'response',
        params: req as Params
      }).toPromise()
        .then((res) => {
          resolve({
            total: Number.parseInt(res.headers.get('X-WP-Total')),
            pages: Number.parseInt(res.headers.get('X-WP-TotalPages')),
            categories: (res.body as any[]).map((category) => this.prepareCategory(category))
          });
        })
        .catch( err => reject(err));
    });
  }

  private prepareTag(tag: any): Tag {
    return {
      id: tag.id,
      count: tag.count,
      description: tag.description,
      link: this.routerLink(tag.link),
      name: tag.name,
      slug: tag.slug,
      taxonomy: tag.taxonomy
    };
  }

  public async getTags(req: TagRequest): Promise<TagResponse> {
    return new Promise<TagResponse>((resolve, reject) => {
      this.http.get(`${this.URL}tags`, {
        headers: this.headers,
        observe: 'response',
        params: req as Params
      }).toPromise()
        .then((res) => {
          resolve({
            total: Number.parseInt(res.headers.get('X-WP-Total')),
            pages: Number.parseInt(res.headers.get('X-WP-TotalPages')),
            tags: (res.body as any[]).map((tag) => this.prepareTag(tag))
          });
        })
        .catch( err => reject(err));
    });
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
  public routerLink(url: string): string {
    return url.replace(WordpressService.BASE_HREF, "");
  }

}
