import { Component, OnInit, Input } from '@angular/core';
import { Post, Image } from 'src/app/services/wordpress.interface';
import { WordpressService } from 'src/app/services/wordpress.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input() post: Post;

  public thumbnail: Image;

  constructor(
    public wordpress: WordpressService
  ) { }

  ngOnInit(): void {    
    if (this.post.thumbnail) {
      this.wordpress.getMedia({id: this.post.thumbnail}).subscribe(
        media => {
          this.thumbnail = media[0].sizes['medium']
        }
      );
    }
  }

  public getRouterLink(url: string): string {
    return url.replace(WordpressService.BASE_HREF, '');
  }

}
