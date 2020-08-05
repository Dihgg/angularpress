import { Component, OnInit } from '@angular/core';
import { WordpressService } from 'src/app/services/wordpress.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  public showSocials: boolean;

  public year: number = new Date().getFullYear();


  constructor(
    public wordpress: WordpressService
  ) { }

  ngOnInit(): void {
    this.showSocials = this.wordpress.THEME.options.footer.socials;
  }

}
