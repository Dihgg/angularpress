import { Component, OnInit } from '@angular/core';
import { WordpressService } from 'src/app/services/wordpress.service';
import { MenuItem } from 'src/app/services/wordpress.interface';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public header: MenuItem[] = [];
  public showSocials: boolean;

  constructor(
    public wordpress: WordpressService,
    public title: Title
  ) {
    this.showSocials = WordpressService.THEME.options.header.socials;
  }

  ngOnInit(): void {
    this.wordpress.getMenu('main-nav').subscribe(
      menu => (this.header = menu)
    );
  }

}
