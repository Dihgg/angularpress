import { Component, OnInit, OnDestroy } from '@angular/core';
import { WordpressService } from '../services/wordpress.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Post, User } from '../services/wordpress.interface';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  public post: Post;
  public slug: string;
  public type = 'posts';

  constructor(
    public route: ActivatedRoute,
    public wordpress: WordpressService
  ) {
    this.slug = this.route.snapshot.paramMap.get('slug');
  }

  ngOnInit(): void {
    this.wordpress.getPosts({
      'slug': this.slug
    }, this.type).subscribe(
      posts => {
        this.post = posts[0];
      }
    );
  }

}
