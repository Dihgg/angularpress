import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { WordpressService, isTag } from 'src/app/services/wordpress.service';
import { Category, Tag } from 'src/app/services/wordpress.interface';

@Component({
  selector: 'app-filter-cloud',
  templateUrl: './filter-cloud.component.html',
  styleUrls: ['./filter-cloud.component.scss']
})
export class FilterCloudComponent {

  @Input() filters: Category[] | Tag[] = [];
  @Output() remove = new EventEmitter<number>();

  constructor(
    public wordpress: WordpressService
  ) { }

  public isTag(cat: Category | Tag) {
    return isTag(cat);
  }
}
