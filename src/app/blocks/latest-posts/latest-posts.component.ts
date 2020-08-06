import { Component, OnInit, Input } from '@angular/core';
import { Post, PostArgs } from 'src/app/services/wordpress.interface';
import { WordpressService } from 'src/app/services/wordpress.service';
import { PostOptions } from '../../types/options.type';

@Component({
  selector: 'app-latest-posts',
  templateUrl: './latest-posts.component.html',
  styleUrls: ['./latest-posts.component.scss']
})
export class LatestPostsComponent implements OnInit {

  public posts: Post[] = [];
  public args: PostArgs;
  public css: string[] = [];
  public options: PostOptions;
  public column: string;

  @Input()
  set attrs(attrs: string[]) {
    this.args = {
      per_page: attrs['postsToShow'],
      order: attrs['order'],
      orderBy: attrs['orderBy'],
      categories: attrs['categories'],
    }

    this.options = {
      showDate: attrs['displayPostDate'],
      showContent: attrs['displayPostContent'],
      contentType: attrs['displayPostContentRadio'],
      excerpt: attrs['excerptLength'],
      displayFeaturedImage: attrs['displayFeaturedImage'],
      featuredImageSizeSlug: attrs['featuredImageSizeSlug'],
      featuredImageAlign: attrs['featuredImageAlign'],
    }

    this.css = [
      `latest-posts--${attrs['postLayout']}`,
      `latest-posts--align-${attrs['align'] || 'left'}`,
      `latest-posts--columns-${attrs['columns']}`,
      attrs['className'] || undefined
    ];

    switch (attrs['postLayout']) {
      case 'grid':
        this.column = `col-${(12 / Number.parseInt(attrs['columns']))}`;
        break;    
        default:
          this.column = 'col-12';
        break;
    }
  }

  constructor(
    public wordpress: WordpressService
  ) { }

  ngOnInit(): void {    
    this.wordpress.getPosts(this.args).subscribe(
      posts => (this.posts = posts)
    )
  }

}
