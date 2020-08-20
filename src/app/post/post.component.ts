import { Component, OnInit, OnDestroy } from '@angular/core';
import { WordpressService } from '../services/wordpress.service';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../services/wordpress.interface';

@Component({
  selector: 'app-post-page',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  public post: Post;
  public slug: string;
  public type = 'posts';
  public loading = true;

  constructor(
    public route: ActivatedRoute,
    public wordpress: WordpressService,
  ) {
    this.slug = this.route.snapshot.paramMap.get('slug');
  }

  ngOnInit(): void {    

    this.wordpress.getPosts({
      'slug': this.slug
    }, this.type).subscribe(
      response => {
        this.post = response.posts[0];
        this.loading = false;
        this.wordpress.setTitle(this.post.title);
      }
    );
  }

}
