import { Component, OnInit, Input } from '@angular/core';
import { MenuItem } from 'src/app/services/wordpress.interface';

@Component({
  selector: 'app-menu-link',
  templateUrl: './menu-link.component.html',
  styleUrls: ['./menu-link.component.scss']
})
export class MenuLinkComponent implements OnInit {

  @Input() link: MenuItem;

  constructor() { }

  ngOnInit(): void {
  }

}
