import { Injectable, Type } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PlatformLocation, Location } from '@angular/common';
import { Observable } from 'rxjs';
import { Params } from '@angular/router';
import { Post, User } from '../services/wordpress.interface';

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
    }).pipe(
      
    );
  }

  /**
   * Recupera Posts
   * @param {Params} params Parâmetros para recuperação dos posts 
   */
  public getPosts(params: Params) {
    return this.get<Post[]>(`posts`, params);
  }

  public getUser(id: number) {
    return this.get<User>(`users/${id}`);
  }

  /**
   * Recupera as informações do post tratadas
   * @param {any} post 
   * @returns {Post} retorna um objeto do tipo Post
   */
  public parsePost(post: any): Post {
    console.log('PARSEPOST', post);
    
    return {
      id: post.id,
      title: post.title.rendered,
      date: post.date,
      excerpt: post.excerpt.rendered,
      content: post.content.rendered,
      author: post.author
    };
  }

  public parseUser(obj:any): User {
    return {
      id: obj.id,
      name: obj.name,
      link: obj.link,
      slug: obj.slug,
      avatar: obj.avatar_urls['96']
    }
  }

  public getPages(params: Params) { }

}
