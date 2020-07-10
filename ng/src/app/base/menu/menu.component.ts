import { Component, OnInit, Input } from '@angular/core';
import { MenuItem, THEME } from 'src/app/services/wordpress.interface';
import { Title } from '@angular/platform-browser';
import { WordpressService } from 'src/app/services/wordpress.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  public items: MenuItem[] = [];
  public logos: THEME['logos'];

  public menuToggled = false;

  @Input() showHome = false;
  @Input() toggler = false;
  @Input() search = false;

  @Input()
  set menu(items: MenuItem[]) {
    this.items = [];
    items.forEach((item: MenuItem) => {
      item = this.setUrl(item);
      if (item.items) {
        item.classes.push('menu__item__link--has-child');
        item.items.forEach((item_: MenuItem, i: number) => {
          item.items[i] = this.setUrl(item_);
        });
      }
      this.items.push(item);
      /* if (item.items) {
        item.items.forEach((item_: MenuItem, i: number) => {
          item_ = this.setUrl(item_);
          if (this.items[i].items) {
            this.items[i].items.push(item_);
          } else {
            this.items[i].items = [item_];
          }
        });
      } */
    });
    console.log('MENU', this.items);
  }

  public setUrl(item: MenuItem): MenuItem {
    if (item.url.includes(WordpressService.BASE_HREF) && !item.target) {
      item.urlRouter = item.url.replace(WordpressService.BASE_HREF, "");
      item.url = null;
    }
    return item;
  }

  constructor(
    public title: Title,
    public wordpress: WordpressService
  ) {
    this.logos = WordpressService.THEME.logos;
  }

  ngOnInit(): void {
    if (!this.toggler) {
      this.menuToggled = true;
    }
  }

}
