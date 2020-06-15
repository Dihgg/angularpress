import { Component, OnInit, Input } from '@angular/core';
import { MenuItem } from 'src/app/services/wordpress.interface';
import { Title } from '@angular/platform-browser';

declare const BASE_HREF: string;

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  public BASE_HREF = BASE_HREF;
  public items: MenuItem[] = [];

  @Input() showHome = false;
  @Input()
  set menu(items: MenuItem[]) {
    this.items = [];
    items.forEach((item: MenuItem) => {
      if (item.url.includes(BASE_HREF) && !item.target) {
        item.urlRouter = item.url.replace(BASE_HREF, "");
        item.url = null;
      }
      this.items.push(item);
    });
    console.log('MENU', this.items);
    
  }

  constructor(
    public title: Title
  ) { }

  ngOnInit(): void { }

}
