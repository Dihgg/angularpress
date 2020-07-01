import { Component, OnInit } from '@angular/core';
import { WordpressService } from 'src/app/services/wordpress.service';
import { MenuItem } from 'src/app/services/wordpress.interface';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public footer: MenuItem[] = [];
  public showSocials: boolean;

  constructor(
    public wordpress: WordpressService,
    public title: Title
  ) {
    this.showSocials = WordpressService.THEME.options.footer.socials;
  }

  ngOnInit(): void {
    this.wordpress.getMenu('footer-links').subscribe(
      menu => (this.footer = menu)
    )
  }

}
