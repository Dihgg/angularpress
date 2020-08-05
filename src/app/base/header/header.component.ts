import { Component, OnInit } from '@angular/core';
import { WordpressService } from 'src/app/services/wordpress.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public showSocials: boolean;
  public menuToggled = false;

  constructor(
    public wordpress: WordpressService
  ) { }

  ngOnInit(): void {
    this.showSocials = this.wordpress.THEME.options.header.socials;
  }

}
