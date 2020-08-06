import { Component, OnInit, OnDestroy, OnChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WordpressService } from '../services/wordpress.service';
import { SearchReponse, Post } from '../services/wordpress.interface';
import { PageComponent } from '../page/page.component';
import { PostOptions } from '../types/options.type';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent extends PageComponent implements OnInit, OnDestroy, OnChanges {

  public query: string;
  public queryIn: string;
  public posts: Post[] = [];

  public ids: number[] = [];
  
  public offset = 0;
  public max = 0;

  public postOptions: PostOptions = {
    contentType: 'excerpt',
    showDate: true,
    excerpt: 55,
    showContent: true,
    displayFeaturedImage: true
  };

  constructor(
    public route: ActivatedRoute,
    public router: Router,
    public wordpress: WordpressService
  ) {

    super(route, wordpress);

    this.route.queryParams.subscribe(params => {
      this.query = params['query']
      this.loading = true;
      this.wordpress.search({
        search: this.query,
        subtype: 'post'
      }).subscribe(
        search => this.onSearch(search)
      );
    });
  }

  public ngOnInit(): void {
    this.wordpress.setTitle(this.wordpress.translate('Search'));
  }

  public ngOnChanges(): void { }

  public ngOnDestroy(): void { }

  public onSubmit(): void {
    this.query = this.queryIn;
    this.router.navigate(['/search'], {
      queryParams: {
        'query': this.query
      }
    });
  }

  public onSearch(results: SearchReponse[]): void {
    this.queryIn = this.query;
    this.posts = [];
    this.offset = 0;
    this.max = results.length;
    
    if (results.length) {
      this.ids = results.map<number>(result => result.id);
      this.loadMore();
    } else {
      this.loading = false;
    }
  }

  public loadMore() {
    this.loading = true;
    this.wordpress.getPosts({
      'include[]': this.ids,
      per_page: this.wordpress.THEME.options.posts_per_page,
      offset: this.offset
    }).toPromise().then(posts => {
      posts.forEach(post => this.posts.push(post));
      this.offset += posts.length;
      this.loading = false;
    });
  }

}
