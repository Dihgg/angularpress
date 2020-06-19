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
  @Input() options: PostOptions;

  public thumbnail: Image;

  constructor(
    public wordpress: WordpressService
  ) { }

  ngOnInit(): void {
    if (this.post.thumbnail) {
      this.wordpress.getMedia(this.post.thumbnail.toString()).subscribe(
        media => {
          this.thumbnail = media.sizes['medium']
        }
      );
    }
  }

  public getRouterLink(url: string): string {
    return url.replace(WordpressService.BASE_HREF, '');
  }

}
