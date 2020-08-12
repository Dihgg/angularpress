import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { MenuItem, THEME } from 'src/app/services/wordpress.interface';
import { WordpressService } from 'src/app/services/wordpress.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  public items: MenuItem[] = [];
  public logos: THEME['logos'];

  public submenu = false;
  public submenuH: number = 0;

  @Input() showHome = false;
  @Input() classes: string[] = [];

  @ViewChild('$submenu') $submenu: ElementRef;

  @Input() location: string;
  public setMenu(items: MenuItem[]) {
    this.items = [];
    items.forEach((item: MenuItem) => {
      item = this.setUrl(item);
      if (item.items) {
        item.classes.push('menu__item__link--has-child', 'mb-2');
        item.items.forEach((item_: MenuItem, i: number) => {
          item.items[i] = this.setUrl(item_);
          item.items[i].classes.push('mb-2');
        });
      }
      this.items.push(item);
    });
  }

  private setUrl(item: MenuItem): MenuItem {
    if (item.url.includes(WordpressService.BASE_HREF) && !item.target) {
      item.urlRouter = this.wordpress.routerLink(item.url);
      item.url = null;
    }
    return item;
  }

  public toggleSubmenu() {
    this.submenu = !this.submenu;
    const height: number = this.$submenu.nativeElement.firstChild.offsetHeight;
    if (this.submenu) {
      this.submenuH = height;
    } else {
      this.submenuH = 0;
    }
  }

  constructor(
    public wordpress: WordpressService
  ) { }

  ngOnInit(): void {
    this.wordpress.getMenu(this.location).then(
      menu => (this.setMenu(menu))
    );
  }

}
