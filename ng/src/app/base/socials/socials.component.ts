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
    this.wordpress.getMenu('social').subscribe(
      menu => (this.socials = menu)
    );
  }

  public getClass(url: string): string {
    return `icon-${new URL(url).hostname.match(/^(.*?)\./)[1]}`;
  }

}
