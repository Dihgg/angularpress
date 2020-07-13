import { Component, OnInit } from '@angular/core';
import { WordpressService } from 'src/app/services/wordpress.service';
import { THEME } from 'src/app/services/wordpress.interface';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent implements OnInit {

  public logos: THEME['logos'];

  constructor(
    public title: Title,
    public wordpress: WordpressService
  ) {
    this.logos = wordpress.THEME.logos;
  }

  ngOnInit(): void { }

}
