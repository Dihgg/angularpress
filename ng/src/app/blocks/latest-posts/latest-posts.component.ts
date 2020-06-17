import { Component, OnInit, Input } from '@angular/core';
import { Post, PostArgs } from 'src/app/services/wordpress.interface';
import { WordpressService } from 'src/app/services/wordpress.service';

@Component({
  selector: 'app-latest-posts',
  templateUrl: './latest-posts.component.html',
  styleUrls: ['./latest-posts.component.scss']
})
export class LatestPostsComponent implements OnInit {

  public posts: Post[] = [];
  public args: PostArgs;

  @Input()
  set attrs(attrs: string[]) {
    this.args = {
      numberposts: attrs['postsToShow'],
      order: attrs['order'],
      orderBy: attrs['orderBy']
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
