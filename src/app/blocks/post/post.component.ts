import { Component, OnInit, Input } from '@angular/core';
import { Post, Image, Category, Tag } from 'src/app/services/wordpress.interface';
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

  public category: Category;

  public tags: Tag[];


  constructor(
    public wordpress: WordpressService
  ) { }

  ngOnInit(): void {

    this.wordpress.getCategories({ post: this.post.id })
      .then((response) => (this.category = response.categories[0]));

    if (this.options.showContent) {
      this.wordpress.getTags({ post: this.post.id })
        .then((response) => (this.tags = response.tags));
    }

    if (this.options.displayFeaturedImage && this.post.thumbnail) {
      this.wordpress.getMedia(this.post.thumbnail).then(
        media => (this.thumbnail = media.sizes)
      );
    }
  }

}
