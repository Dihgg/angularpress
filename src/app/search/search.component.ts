import { Component, OnInit, OnDestroy, OnChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WordpressService } from '../services/wordpress.service';
import { Post, Category, Tag, SearchRequest, SearchReponse } from '../services/wordpress.interface';
import { PageComponent } from '../page/page.component';
import { PostOptions } from '../types/options.type';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent extends PageComponent implements OnInit {

  public query: string;
  private request: SearchRequest = {};
  public response: SearchReponse = {
    pages: 0,
    results: [],
    total: 0
  };

  public posts: Post[] = [];
  public categories: Category[] = [];
  public tags: Tag[] = [];

  public hasLoadMore = true;

  public postOptions: PostOptions = {
    contentType: 'excerpt',
    showDate: true,
    excerpt: 0,
    showContent: true,
    displayFeaturedImage: true,
    featuredImageAlign: 'left'
  };

  constructor(
    public route: ActivatedRoute,
    public router: Router,
    public wordpress: WordpressService
  ) {
    super(route, wordpress);
  }

  public ngOnInit(): void {
    this.wordpress.setTitle(this.wordpress.translate('Search'));
    this.route.queryParams.subscribe(params => {
      this.request = {
        search: params.query,
        page: 0
      };
      this.posts = [];
      this.categories = [];
      this.tags = [];
      this.query = this.request.search;

      this.loading = true;

      this.loadMore();
    });
  }

  public onSubmit(): void {
    this.request.search = this.query;
    this.router.navigate(['/search'], {
      queryParams: {
        query: this.request.search
      }
    });
  }

  private loadCategories(ids: number[]): void {
    this.wordpress.getCategories({
      'include[]': ids
    }).subscribe(
      response => {
        console.log('should load categories', response.categories);
        this.categories = this.categories.concat(response.categories);
      }
    );
  }

  private loadTags(ids: number[]): void {
    this.wordpress.getTags({
      'include[]': ids
    }).subscribe(
      response => {
        console.log('should load tags', response.tags);
        this.tags = this.tags.concat(response.tags);
      }
    );
  }

  public loadMore(): void {
    this.loading = true;
    this.request.page++;
    this.wordpress.search(
      this.request
    )
    .subscribe(response => {
      this.response = response;

      if (response.results.length) {
        if (this.request.page >= response.pages) {
          this.hasLoadMore = false;
        }
        this.wordpress.getPosts({
          'include[]': response.results.map<number>(result => result.id)
        }).subscribe(posts => {

          let categories: number[] = [];
          let tags: number[] = [];

          posts.posts.forEach(post => {
            this.posts.push(post);
            categories = categories.concat(post.categories);
            tags = tags.concat(post.tags);
          });

          this.loadCategories(categories);
          this.loadTags(tags);

          this.loading = false;
        });
      } else {
        this.loading = false;
        this.hasLoadMore = false;
        this.posts = [];
      }
    });
  }

  public filterClick(cat: Category | Tag): void {
    console.log('clicked', cat);
  }

}
