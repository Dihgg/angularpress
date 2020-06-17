import { Component, OnInit, Input } from '@angular/core';
import { MenuItem } from 'src/app/services/wordpress.interface';
import { Title } from '@angular/platform-browser';
import { WordpressService } from 'src/app/services/wordpress.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  public items: MenuItem[] = [];

  @Input() showHome = false;
  @Input()
  set menu(items: MenuItem[]) {
    this.items = [];
    items.forEach((item: MenuItem) => {
      if (item.url.includes(WordpressService.BASE_HREF) && !item.target) {
        item.urlRouter = item.url.replace(WordpressService.BASE_HREF, "");
        item.url = null;
      }
      this.items.push(item);
    });    
  }

  constructor(
    public title: Title
  ) { }

  ngOnInit(): void { }

}
