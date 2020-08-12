import { Component, OnInit, OnDestroy, OnChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WordpressService } from '../services/wordpress.service';
import { SearchReponse, Post } from '../services/wordpress.interface';
import { PageComponent } from '../page/page.component';
import { PostOptions } from '../types/options.type';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent extends PageComponent implements OnInit, OnDestroy, OnChanges {

  public query: string;
  public queryIn: string;
  public posts: Post[] = [];


  public currentPage = 0;
  public pages = 0;
  public total = 0;

  private subscription: Subscription;

  public postOptions: PostOptions = {
    contentType: 'excerpt',
    showDate: true,
    excerpt: 55,
    showContent: false,
    displayFeaturedImage: true,
    featuredImageAlign: 'left',
    featuredImageSizeSlug: 'thumbnail'
    
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
    this.subscription = this.route.queryParams.subscribe(params => {
      this.query = params['query'];
      this.queryIn = this.query;
      this.posts = [];
      this.loading = true;
      this.currentPage = 0;
      this.loadMore();
    });
  }

  public ngOnChanges(): void { }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public onSubmit(): void {
    this.query = this.queryIn;
    this.router.navigate(['/search'], {
      queryParams: {
        'query': this.query
      }
    });
  }

  public loadMore() {
    this.loading = true;

    this.wordpress.search({
      search: this.query,
      page: this.currentPage || 1,
      per_page: this.wordpress.THEME.options.posts_per_page
    }).then(res => {
      this.pages = res.pages;
      this.total = res.total;
      this.wordpress.getPosts({
        'include[]': res.results.map<number>(result => result.id)
      }).then(response => {
        response.posts.forEach(post => this.posts.push(post));
        this.currentPage++;
        this.loading = false;
      });
    });
  }

}
