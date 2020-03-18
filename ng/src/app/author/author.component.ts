import { Component, OnInit, Input } from '@angular/core';
import { User } from '../services/wordpress.interface';
import { WordpressService } from '../services/wordpress.service';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.scss']
})
export class AuthorComponent implements OnInit {
  
  @Input() id: number;

  public author: User;

  constructor(
    private wordpress: WordpressService
  ) { }

  ngOnInit(): void {
    this.wordpress.getUser(this.id).subscribe(
      user => this.author = user
    )
  }

}
