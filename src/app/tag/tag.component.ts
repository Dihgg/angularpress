import { Component } from '@angular/core';
import { ArchiveComponent } from '../archive/archive.component';
import { ActivatedRoute, Router } from '@angular/router';
import { WordpressService } from '../services/wordpress.service';

@Component({
  selector: 'app-tag',
  templateUrl: '../archive/archive.component.html',
  styleUrls: ['../archive/archive.component.scss']
})
export class TagComponent extends ArchiveComponent {

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

  public reload() {
    const slug = this.route.snapshot.paramMap.get('tag');
    if (this.slug !== slug) {
      super.reload();
      this.slug = slug;
      this.wordpress.getTags({
        slug: this.slug
      }).subscribe(
        response => this.loadPosts(response.tags[0])
      );
    }
  }
}
