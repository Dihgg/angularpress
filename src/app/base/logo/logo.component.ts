import { Component, OnInit, Input } from '@angular/core';
import { WordpressService } from 'src/app/services/wordpress.service';
import { THEME } from 'src/app/services/wordpress.interface';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent implements OnInit {

  @Input() footer = false;

  public logos = {
    desktop: '',
    mobile: ''
  };

  constructor(
    public wordpress: WordpressService
  ) { }

  ngOnInit(): void {
    if (this.footer && this.wordpress.hasLogo('footer')) {
      this.logos = this.wordpress.THEME.logos.footer;
    } else if (this.wordpress.hasLogo('header')) {
      this.logos = this.wordpress.THEME.logos.header;
    }
  }

}
