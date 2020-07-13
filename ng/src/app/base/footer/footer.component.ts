import { Component, OnInit } from '@angular/core';
import { WordpressService } from 'src/app/services/wordpress.service';
/* import { TRANSLATION } from 'src/app/services/wordpress.interface'; */

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  public showSocials: boolean;

  public year: number = new Date().getFullYear();

  /* public labels: TRANSLATION[] = [
    {
      term: 'All rights reserved'
    }
  ]; */

  constructor(
    public wordpress: WordpressService
  ) {
    this.showSocials = wordpress.THEME.options.footer.socials;
  }

  ngOnInit(): void { }

}
