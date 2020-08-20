import { Component, OnInit } from '@angular/core';
import { WordpressService } from '../services/wordpress.service';
import { ActivatedRoute } from '@angular/router';
import { PageComponent } from '../page/page.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent extends PageComponent implements OnInit {

  constructor(
    public route: ActivatedRoute,
    public wordpress: WordpressService
  ) {
    super(route, wordpress);
    this.slug = 'home';
  }

  public ngOnInit(): void {
    super.ngOnInit();
    this.wordpress.setTitle(this.wordpress.THEME.NAME);
  }

}
