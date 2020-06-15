import { Component, OnInit } from '@angular/core';
import { WordpressService } from 'src/app/services/wordpress.service';
import { MenuItem } from 'src/app/services/wordpress.interface';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public footer: MenuItem[] = [];

  constructor(
    public wordpress: WordpressService,
    public title: Title
  ) { }

  ngOnInit(): void {
    this.wordpress.getMenu('Footer').subscribe(
      menu => (this.footer = menu)
    )
  }

}
