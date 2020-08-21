import { Component, OnInit, OnDestroy } from '@angular/core';
import { WordpressService } from '../services/wordpress.service';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Category, Tag, Post, PostRequest } from '../services/wordpress.interface';
import { PostOptions } from '../types/options.type';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})
export class ArchiveComponent implements OnDestroy {

  public slug: string;

  public type: string;

  public cat: Category | Tag;

  public posts: Post[] = [];
  public postOptions: PostOptions = {
    contentType: 'excerpt',
    showDate: true,
    excerpt: 0,
    showContent: true,
    displayFeaturedImage: true,
    featuredImageAlign: 'center'
  };

  public page = 0;
  public totalPages = 0;
  public total = 0;

  public loading = false;

  private request: PostRequest = {};

  private navigation: Subscription;

  constructor(
    public route: ActivatedRoute,
    public wordpress: WordpressService,
    public router: Router
  ) {
    this.slug = this.route.snapshot.paramMap.get('category');

    this.navigation = this.router.events.subscribe((e: any) => {
      if (e instanceof NavigationEnd) {
        this.reload();
      }
    });
  }

  public reload() {
    this.type = null;
    this.cat = null;
    this.posts = [];
    this.page = 0;
    this.request = {};
    this.totalPages = 0;
    this.total = 0;
    this.loading = true;
  }

  ngOnDestroy(): void {
    this.navigation.unsubscribe();
  }

  private isCategory(arg: Category | Tag): boolean {
    return arg.parent !== undefined;
  }

  public loadPosts(cat: Category | Tag): void {

    this.cat = cat;

    if (this.isCategory(this.cat)) {
      this.type = this.wordpress.translate('Category');
      this.request.categories = [this.cat.id];
    } else {
      this.type = this.wordpress.translate('Tag');
      this.request.tags = [this.cat.id];
    }

    this.loadMore();
  }

  public loadMore() {
    this.loading = true;
    this.page++;
    this.request.page = this.page || 1;
    this.wordpress.getPosts(this.request).subscribe( response => {
      this.total = response.total;
      this.totalPages = response.pages;
      this.posts = this.posts.concat(response.posts);
      this.loading = false;
    });
  }

}
