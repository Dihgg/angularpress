import { Component, OnInit } from '@angular/core';
import { WordpressService } from '../services/wordpress.service';
import { ActivatedRoute } from '@angular/router';
import { PostComponent } from '../post/post.component';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent extends PostComponent {

  constructor(
    public route: ActivatedRoute,
    public wordpress: WordpressService
  ) {
    super(route, wordpress);
    this.slug = this.route.snapshot.paramMap.get('page');
    this.type = 'pages';
  }

}
