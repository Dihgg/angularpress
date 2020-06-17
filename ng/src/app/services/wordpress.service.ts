import { Injectable, Type } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LocationStrategy, Location } from '@angular/common';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from "rxjs/operators";
import { Params } from '@angular/router';
import { Post, User, MenuItem, Block } from '../services/wordpress.interface';

@Injectable({
  providedIn: 'root'
})
export class WordpressService {

  private URL: string;
  private context = "v2";
  private headers = {};

  constructor(
    private http: HttpClient,
    private location: Location
  ) {
    this.URL = `${this.location.prepareExternalUrl('wp-json')}/wp/${this.context}/`
  }

  /**
   * Wrapper do método get
   * @param {string} path caminho para REST API 
   * @param {Params} params Parâmetros URL GET
   */
  private get<T>(path: string, params: Params = {}): Observable<T> {
    return this.http.get<T>(`${this.URL}${path}/`, {
      headers: this.headers,
      params: params
    });
  }

  /**
   * Recupera Posts
   * @param {Params} params Parâmetros para recuperação dos posts
   * @param {'posts' | 'pages'} type Tipo de post para recuperação
   * @returns {Observable<Post[]>} Retorna um observable com array de posts
   */
  public getPosts(params: Params, type: 'posts' | 'pages' | string = 'posts'): Observable<Post[]> {
    return this.get<Post[]>(type, params).pipe(
      map((res: any) => {
        let posts: Post[] = [];
        res.forEach((post: any) => {
          posts.push({
            id: post.id,
            title: post.title.rendered,
            date: post.date,
            excerpt: post.excerpt.rendered,
            content: post.content.rendered,
            blocks: post.blocks.map((block: any): Block => ({
              name: block.blockName,
              attrs: block.attrs,
              html: block.innerHTML
            })),
            author: post.author
          });
        });
        return posts;
      }),
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

  public getMenu(name: string): Observable<MenuItem[]> {
    return this.get<MenuItem>(`menu`, { name: name }).pipe(
      map((res: any) => {
        let items: MenuItem[] = [];
        res.forEach((item: any) => {
          items.push({
            type: (item.post_type === 'custom') ? 'custom' : 'post',
            title: item.title,
            url: item.url,
            classes: item.classes,
            target: item.target || null
          })
        });
        return items;
      }),
      catchError(error => throwError(error))
    );
  }
}
