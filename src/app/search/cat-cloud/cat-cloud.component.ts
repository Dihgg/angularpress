import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Category, Tag } from 'src/app/services/wordpress.interface';

@Component({
  selector: 'app-cat-cloud',
  templateUrl: './cat-cloud.component.html',
  styleUrls: ['./cat-cloud.component.scss']
})
export class CatCloudComponent {

  @Input() title: string;
  @Input() prepend = '';
  @Input() items: Category[] | Tag[] = [];

  @Output() clicked = new EventEmitter<Category | Tag>();

  constructor() { }

}
