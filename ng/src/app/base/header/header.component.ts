import { Component, OnInit } from '@angular/core';
import { WordpressService } from 'src/app/services/wordpress.service';
import { MenuItem } from 'src/app/services/wordpress.interface';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public header: MenuItem[] = [];

  constructor(
    public wordpress: WordpressService,
    public title: Title
  ) { }

  ngOnInit(): void {
    this.wordpress.getMenu('Main Menu').subscribe(
      menu => (this.header = menu)
    );
  }

}
