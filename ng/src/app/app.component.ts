import { Component, ElementRef } from '@angular/core';
import { WordpressService } from '././services/wordpress.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    private appRoot: ElementRef,
    private wordpress: WordpressService
  ) {
    console.log('ROOT', this.appRoot);
  }
}
