import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { WordpressService } from 'src/app/services/wordpress.service';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent {

  @Input() query = '';
  @Output() submitted = new EventEmitter<string>();

  constructor(
    public wordpress: WordpressService
  ) { }

}
