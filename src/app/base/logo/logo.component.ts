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

  public logos: THEME['logos'] | THEME['logos']['footer'];

  constructor(
    public wordpress: WordpressService
  ) { }

  ngOnInit(): void {
    this.logos = this.wordpress.THEME.logos;
    if (this.footer && (this.wordpress.THEME.logos.footer.desktop || this.wordpress.THEME.logos.footer.mobile)) {
      this.logos = this.wordpress.THEME.logos.footer;
    }
  }

}
