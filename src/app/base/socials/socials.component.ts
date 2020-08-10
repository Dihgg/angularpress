import { Component, OnInit, Input } from '@angular/core';
import { MenuItem } from 'src/app/services/wordpress.interface';
import { WordpressService } from 'src/app/services/wordpress.service';

@Component({
  selector: 'app-socials',
  templateUrl: './socials.component.html',
  styleUrls: ['./socials.component.scss']
})
export class SocialsComponent implements OnInit {

  public socials: MenuItem[] = [];

  constructor(
    public wordpress: WordpressService
  ) { }

  ngOnInit(): void {
    this.wordpress.getMenu('social').then(
      menu => (this.socials = menu)
    );
  }

  public getIcon(url: string): string {
    const name: string = new URL(url).hostname.match(/^(.*?)\./)[1];
    switch (name) {
      case 'facebook':
      case 'twitter':
      case 'instagram':
      case 'twitch':
        return name;
      default:
        return 'external-link';
    }
  }

}
