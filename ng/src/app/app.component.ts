import { Component } from '@angular/core';
import { WordpressService } from './services/wordpress.service';
import { THEME } from './services/wordpress.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor() { }
}
