import { Component, ElementRef } from '@angular/core';
import { WordpressService } from '././services/wordpress.service';
import { Post } from './services/wordpress.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    private wordpress: WordpressService
  ) {
    this.wordpress.getBase().subscribe(
      base => console.log(base)
    )
  }
}
