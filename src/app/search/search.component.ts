import { Component, OnInit, OnDestroy, OnChanges } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { WordpressService, isTag } from '../services/wordpress.service';
import { Post, Category, Tag, SearchRequest, SearchReponse, PostRequest, PostResponse, TagRequest } from '../services/wordpress.interface';
import { PageComponent } from '../page/page.component';
import { PostOptions } from '../types/options.type';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent extends PageComponent implements OnInit {

  public query: string;
  private request: PostRequest = {};
  public response: PostResponse = {
    posts: [],
    pages: 0,
    total: 0
  };

  public posts: Post[] = [];
  public categories: Category[] = [];
  public tags: Tag[] = [];
  public filters: Array<Tag | Category> = [];

  public hasLoadMore = false;

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
      const categories = params.categories || [];
      const tags = params.tags || [];

      this.request = {
        search: params.search || '',
        categories,
        tags,
        page: 0
      };

      this.query = params.search;

      this.posts = [];
      this.loadMore();

      console.log('FILTERS', categories, tags);

      this.loadFilters(categories, tags);
    });
  }

  public onSubmit(query: string): void {
    this.categories = [];
    this.tags = [];
    this.filters = [];
    this.router.navigate(['/search'], {
      queryParams: {
        search: query
      }
    });
  }

  public loadMore(): void {
    this.loading = true;
    this.request.page++;
    this.wordpress
      .getPosts(this.request)
      .subscribe(response => {
        this.response = response;
        this.loading = false;
        if (response.posts.length) {
          let categories: number[] = [];
          let tags: number[] = [];
          response.posts.forEach((post: Post) => {
            this.posts.push(post);
            categories = categories.concat(post.categories);
            tags = tags.concat(post.tags);
          });

          this.loadCategories(categories);
          this.loadTags(tags);
        }
        if (this.request.page >= response.pages) {
          this.hasLoadMore = false;
        } else {
          this.hasLoadMore = true;
        }
      });
  }

  public addFilter(filter: Category | Tag): void {
    if (!Boolean(this.filters.filter((e) => e.id === filter.id).length)) {
      this.filters.push(filter);
      this.updateFilters();
    }
  }

  public removeFilter(index: number): void {
    this.filters.splice(index, 1);
    this.updateFilters();
  }

  public isTag(cat: Category | Tag) {
    return isTag(cat);
  }

  private loadCategories(ids: number[]): void {
    console.log('CATEGORIES', this.categories);
    const categories = ids.filter(
      function(id) {
        return !this.includes(id);
      },
      this.categories.filter(
        (category) => !isTag(category)
      ).map<number>(
        (category) => category.id
      )
    );

    if (categories.length) {
      this.wordpress.getCategories({
        'include[]': categories,
      }).subscribe(
        response => (this.categories = this.categories.concat(response.categories))
      );
    }
  }

  private loadTags(ids: number[]): void {

    const tags = ids.filter(
      function(id) {
        return !this.includes(id);
      },
      this.tags.filter(
        (tag) => isTag(tag)
      ).map<number>(
        (tag) => tag.id
      )
    );

    if (tags.length) {
      this.wordpress.getTags({
        'include[]': tags
      }).subscribe(
        response => (this.tags = this.tags.concat(response.tags))
      );
    }
  }

  private loadFilters(categories: number[], tags: number[]): void {
    this.filters = [];
    if (categories.length) {
      this.wordpress.getCategories({
        'include[]': categories
      }).subscribe(
        response => (this.filters = this.filters.concat(response.categories))
      );
    }

    if (tags.length) {
      this.wordpress.getTags({
        'include[]': tags
      }).subscribe(
        response => (this.filters = this.filters.concat(response.tags))
      );
    }
  }

  private updateFilters() {
    const tags = this.filters.filter((item) => isTag(item));
    const categories = this.filters.filter((item) => !isTag(item));
    this.router.navigate(['/search'], {
      queryParams: {
        search: this.request.search,
        categories: categories.map<number>(category => category.id),
        tags: tags.map<number>(tag => tag.id),
      },
      queryParamsHandling: 'merge'
    });
  }

}
