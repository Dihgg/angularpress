import { Component, OnInit, Input } from '@angular/core';
import { Post, PostRequest } from 'src/app/services/wordpress.interface';
import { WordpressService } from 'src/app/services/wordpress.service';
import { PostOptions } from '../../types/options.type';

@Component({
  selector: 'app-latest-posts',
  templateUrl: './latest-posts.component.html',
  styleUrls: ['./latest-posts.component.scss']
})
export class LatestPostsComponent implements OnInit {

  public posts: Post[] = [];
  public args: PostRequest;
  public css: string[] = [];
  public options: PostOptions;
  public columns: string[] = [];

  @Input()
  set attrs(attrs: any) {
    this.args = {
      per_page: attrs.postsToShow,
      order: attrs.order,
      orderBy: attrs.orderBy,
      categories: attrs.categories,
    };

    this.options = {
      showDate: attrs.displayPostDate,
      showContent: attrs.displayPostContent,
      contentType: attrs.displayPostContentRadio,
      excerpt: attrs.excerptLength,
      displayFeaturedImage: attrs.displayFeaturedImage,
      featuredImageAlign: attrs.featuredImageAlign,
    };

    this.css = [
      `latest-posts--${attrs.postLayout}`,
      `latest-posts--align-${attrs.align || 'left'}`,
      `latest-posts--columns-${attrs.columns}`,
      attrs.className || undefined
    ];

    switch (attrs.postLayout) {
      case 'grid':
        this.columns.push(`col-md-${(12 / Number.parseInt(attrs.columns, 10))}`);
        break;
    }
    this.columns.push('col-12');
  }

  constructor(
    public wordpress: WordpressService
  ) { }

  ngOnInit(): void {
    this.wordpress.getPosts(this.args).subscribe(
      response => (this.posts = response.posts)
    );
  }

}
