import { Component, OnInit } from '@angular/core';
import { WordpressService } from 'src/app/services/wordpress.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  public showSocials: boolean;

  constructor(
    public wordpress: WordpressService
  ) {
    this.showSocials = wordpress.THEME.options.footer.socials;
  }

  ngOnInit(): void { }

}
