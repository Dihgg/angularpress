import { Component, OnInit } from '@angular/core';
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

  constructor(
    private route: ActivatedRoute,
    private wordpress: WordpressService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getPost();
  }

  private getPost() {
    this.wordpress.getPosts({
      'slug': this.route.snapshot.paramMap.get('slug')
    }).subscribe(
      posts => {
        this.post = posts[0];
      }
    );
  }
  
  ngOnDestroy() : void { }

}
