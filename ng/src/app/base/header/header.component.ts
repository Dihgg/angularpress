import { Component, OnInit } from '@angular/core';
import { WordpressService } from 'src/app/services/wordpress.service';
import { MenuItem } from 'src/app/services/wordpress.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public header: MenuItem[] = [];

  constructor(
    public wordpress: WordpressService
  ) { }

  ngOnInit(): void {
    this.wordpress.getMenu('Main Menu').subscribe(
      menu => (this.header = menu)
    );
  }

}
