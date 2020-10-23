import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Location } from '@angular/common';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Params } from '@angular/router';
import {
  Post,
  User,
  MenuItem,
  Block,
  Media,
  Image,
  PostRequest,
  THEME,
  SearchRequest,
  SearchReponse,
  SearchItem,
  PostResponse,
  CategoryResponse,
  CategoryRequest,
  Category,
  TagRequest,
  TagResponse,
  Tag,
  RestRequest
} from '../services/wordpress.interface';
import { sanitizeHtml } from '../utils/utils';
import { Title } from '@angular/platform-browser';

declare const BASE_HREF: string;

@Injectable({
  providedIn: 'root'
})
export class WordpressService {

  public static BASE_HREF: string = BASE_HREF;

  public URL: string;
  private context = 'v2';
  private headers: HttpHeaders = new HttpHeaders();

  public THEME: THEME;
  public TRANSLATION = {};

  constructor(
    private http: HttpClient,
    private location: Location,
    private title: Title
  ) {
    this.URL = `${WordpressService.BASE_HREF}/wp-json/wp/${this.context}/`;
  }

  /**
   * Insere no WordpressService as opções do wordpress
   * @param options Objeto JSON com informações do tema
   */
  public setTHEME(options: THEME): void {
    this.THEME = options;
  }

  /**
   * Insere as traduções no WordpressService
   * @param translation JSON com a tradução
   */
  public setTRANSLATION(translation: any): void {
    this.TRANSLATION = translation;
  }

  /**
   * Traduz o tema
   * @param label Label a ser traduzida
   * @returns Retorna a tradução (se houver)
   */
  public translate(label: string): string {
    return this.TRANSLATION[label] || label;
  }

  /**
   * Modifica o título da página. Mantendo o título do blog no final
   * @param title Título
   * @param separator Separador
   */
  public setTitle(title: string, separator: string = ' | '): void {
    this.title.setTitle(`${title}${separator}${this.THEME.NAME}`);
  }

  public getTitle(): string {
    return this.title.getTitle();
  }

  /**
   * Trata URL para utilizar em um [routerLink]
   * @param url URL de entrada
   * @returns URL tratata
   */
  public routerLink(url: string): string {
    return url.replace(WordpressService.BASE_HREF, '');
  }

  public hasLogo(location: 'header' | 'footer' = 'header'): boolean {
    if (this.THEME.logos[location].desktop || this.THEME.logos[location].mobile) {
      return true;
    }
    return false;
  }

  private defaultsRequest(req: RestRequest): Params {
    return Object.assign<RestRequest, Params>(req, {
      per_page: this.THEME.options.posts_per_page
    });
  }

  /**
   * Wrapper do método get
   * @param path caminho para REST API
   * @param query Parâmetros URL GET
   */
  private get<T>(path: string, params: Params = {}): Observable<T> {
    return this.http.get<T>(`${this.URL}${path}`, {
      headers: this.headers,
      params,
    });
  }

  /**
   * Retornar um Objeto do tipo Block para o Serviço
   * @param block Objeto de retorno da API
   * @returns Block para consumo do serviço
   */
  private prepareBlock(block: any): Block {
    return {
      name: block.blockName,
      attrs: block.attrs,
      html: block.innerHTML
    };
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
      blocks: post.blocks.map((block: any): Block => this.prepareBlock(block)),
      author: post.author,
      thumbnail: post.featured_media || null,
      categories: post.categories,
      tags: post.tags
    };
  }

  /**
   * Recupera Posts
   * @param params Parâmetros para recuperação dos posts
   * @param sts' | 'pages'} type Tipo de post para recuperação
   * @returns ostResponse>} Um Observable com a resposta
   */
  public getPosts(request: PostRequest, type: 'posts' | 'pages' | string = 'posts'): Observable<PostResponse> {
    return this.http.get(`${this.URL}${type}`, {
      headers: this.headers,
      observe: 'response',
      params: this.defaultsRequest(request)
    }).pipe(
      map((res: any) => ({
        total: Number.parseInt(res.headers.get('X-WP-Total'), 10),
        pages: Number.parseInt(res.headers.get('X-WP-TotalPages'), 10),
        posts: (res.body as any[]).map(post => this.preparePost(post))
      })),
      catchError(error => throwError(error))
    );
  }

  /**
   * Recupera um post via ID
   * @param id Id do post
   * @returns Um Observable com o post
   */
  public getPost(id: number): Observable<Post> {
    return this.get<Post>(`posts/${id}`)
      .pipe(
        map((res: any) => (this.preparePost(res))),
        catchError(error => throwError(error))
      );
  }

  /**
   * Recupera Usuário
   * @param id ID do usuário
   * @returns ser>} Retorna um observable com dados do usuário
   */
  public getUser(id: number, size = 96): Observable<User> {
    return this.get<User>(`users/${id}`)
      .pipe(
        map((user: any) => ({
          id: user.id,
          name: user.name,
          link: user.link,
          slug: user.slug,
          avatar: user.avatar_urls[size]
        })),
        catchError(error => throwError(error))
      );
  }

  /**
   * Prepara um MenuItem
   * @param item Objeto de resposta
   * @returns MenuItem de resposta
   */
  private prepareMenuItem(item: any): MenuItem {
    return {
      ID: parseInt(item.ID, 10),
      type: (item.post_type === 'custom') ? 'custom' : 'post',
      title: item.title,
      url: item.url,
      classes: item.classes,
      target: item.target || null,
      items: []
    };
  }

  /**
   * Recupera um Menu do Wordpress
   * @param location Nome do menu
   * @returns enuItem[]>} Retorna uma Promise com uma lista de itens de menu
   */
  public getMenu(location: string): Observable<MenuItem[]> {
    return this.http.get<MenuItem[]>(`${this.URL}menu`, {
      params: {
        location
      }
    }).pipe(
      map((res: any) => {
        let items: MenuItem[] = [];
        res.forEach((item: any) => {
          const parent = parseInt(item.menu_item_parent, 10);
          if (parent) {
            items = items.map((obj: MenuItem) => {
              if (obj.ID === parent) {
                obj.items.push(this.prepareMenuItem(item));
              }
              return obj;
            });
          } else {
            items.push(this.prepareMenuItem(item));
          }
        });
        return items;
      }),
      catchError(error => throwError(error))
    );
  }

  /**
   * Prepara as imagens para o objeto de Media
   * @param media Objeto de resposta da API
   */
  private prepareImages(media: any): Image[] {
    const images: Image[] = [];
    Object.keys(media.media_details.sizes).forEach((key: string) => {
      const size = media.media_details.sizes[key];
      images[key] = {
        size: key,
        width: size.width,
        height: size.height,
        url: size.source_url,
        alt: media.alt_text,
        caption: sanitizeHtml(media.caption.rendered)
      };
    });
    return images;
  }

  /**
   * Preparar Media para o serviço
   * @param media Objeto de retorno da API
   * @returns Retorna um objeto do tipo Media
   */
  private prepareMedia(media: any): Media {
    return {
      id: media.id,
      type: media.media_type,
      url: media.source_url,
      sizes: this.prepareImages(media)
    };
  }

  /**
   * Recupera informações sobre uma mídia
   * @param id id da mídia
   * @returns edia>} Observable da resposta com uma mídia
   */
  public getMedia(id: number): Observable<Media> {
    return this.get<Media>(`media/${id}`)
      .pipe(
        map((media: any) => (this.prepareMedia(media))),
        catchError(error => throwError(error))
      );
  }

  /**
   * Preparar um SearchItem para o serviço
   * @param item Item de resposta da API
   * @returns um objeto SearchItem
   */
  private prepareSearchItem(item: any): SearchItem {
    return {
      id: item.id,
      title: item.title,
      url: item.url,
      type: item.type,
      subtype: item.subtype
    };
  }

  /**
   * Método para fazer busca na API do Wordpress
   * @param req Argumentos para o request
   * @returns earchReponse[]} Obersable com um array de SearchResponse
   */
  public search(req: SearchRequest): Observable<SearchReponse> {
    return this.http.get(`${this.URL}search`, {
      headers: this.headers,
      observe: 'response',
      params: this.defaultsRequest(req)
    }).pipe(
      map((res: any) => {
        return {
          total: res.headers.get('X-WP-Total'),
          pages: res.headers.get('X-WP-TotalPages'),
          results: res.body.map(
            (item: any): SearchItem => this.prepareSearchItem(item)
          ) as SearchItem[]
        };
      }),
      catchError(error => throwError(error))
    );
  }

  /**
   * Preparar Category para o serviço
   * @param category Objeto de retorno da API
   * @returns Retorna um objeto do tipo Category
   */
  private prepareCategory(category: any): Category {
    return {
      id: category.id,
      count: category.count,
      name: category.name,
      description: category.description,
      link: category.link,
      slug: category.slug,
      taxonomy: category.taxonomy,
      parent: category.parent
    };
  }

  /**
   * Método para retornar Categorias do Wordpress
   * @param req Request para API
   * @returns ategoriesResponse>} Retorna uma Promise<CategoryResponse>
   */
  public getCategories(req: CategoryRequest): Observable<CategoryResponse> {
    return this.http.get(`${this.URL}categories`, {
      headers: this.headers,
      observe: 'response',
      params: this.defaultsRequest(req)
    })
      .pipe(
        map(
          (res: any) => ({
            total: Number.parseInt(res.headers.get('X-WP-Total'), 10),
            pages: Number.parseInt(res.headers.get('X-WP-TotalPages'), 10),
            categories: (res.body as any[]).map((category) => this.prepareCategory(category))
          })
        ),
        catchError(error => throwError(error)
        )
      );
  }

  /**
   * Preparar Tag para o serviço
   * @param tag Objeto de retorno da API
   * @returns Retorna um objeto do tipo Tag
   */
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

  /**
   * Método para retornar Tag do Wordpress
   * @param req Request para API
   * @returns agResponse>} Retorna uma Promise<TagResponse>
   */
  public getTags(req: TagRequest): Observable<TagResponse> {
    return this.http.get(`${this.URL}tags`, {
      headers: this.headers,
      observe: 'response',
      params: this.defaultsRequest(req)
    }).pipe(
      map((res: any) => ({
        total: Number.parseInt(res.headers.get('X-WP-Total'), 10),
        pages: Number.parseInt(res.headers.get('X-WP-TotalPages'), 10),
        tags: (res.body as any[]).map((tag) => this.prepareTag(tag))
      })),
      catchError(error => throwError(error))
    );
  }
}

export function isTag(arg: Category | Tag): boolean {
  return arg.parent === undefined;
}

export function isCategory(arg: Category | Tag): boolean {
  return arg.parent !== undefined;
}
