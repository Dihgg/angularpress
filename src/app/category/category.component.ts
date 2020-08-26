import { Component, OnInit } from '@angular/core';
import { ArchiveComponent } from '../archive/archive.component';
import { WordpressService } from '../services/wordpress.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: '../archive/archive.component.html',
  styleUrls: ['../archive/archive.component.scss']
})
export class CategoryComponent extends ArchiveComponent implements OnInit {

  constructor(
    public route: ActivatedRoute,
    public wordpress: WordpressService,
    public router: Router
  ) {
    super(
      route,
      wordpress,
      router
    );
  }

  public ngOnInit() {
    super.ngOnInit();
    this.wordpress.getCategories({
      slug: this.slug
    }).subscribe(
      response => this.loadPosts(response.categories[0])
    );
  }

  public reload() { }

}
