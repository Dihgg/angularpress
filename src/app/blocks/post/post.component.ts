import { Component, OnInit, Input } from '@angular/core';
import { Post, Image } from 'src/app/services/wordpress.interface';
import { WordpressService } from 'src/app/services/wordpress.service';
import { PostOptions } from '../../types/options.type';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input() post: Post;
  @Input() options: PostOptions = {
    showDate: false,
    showContent: false,
    contentType: 'excerpt',
    excerpt: 0,
    displayFeaturedImage: true,
    featuredImageSizeSlug: "thumbnail",
    featuredImageAlign: "center"
  };


  public thumbnail: Image[];


  constructor(
    public wordpress: WordpressService
  ) { }

  ngOnInit(): void {
    console.log('POST', this.post);
    if (this.options.displayFeaturedImage && this.post.thumbnail) {
      this.wordpress.getMedia(this.post.thumbnail).subscribe(
        media => (this.thumbnail = media.sizes)
      );
    }
  }

  public getRouterLink(url: string): string {
    return url.replace(WordpressService.BASE_HREF, '');
  }

}
