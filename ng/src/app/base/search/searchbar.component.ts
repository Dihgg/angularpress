import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { WordpressService } from 'src/app/services/wordpress.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss']
})
export class SearchbarComponent implements OnInit {

  @ViewChild('$input') $input: ElementRef;

  public active = false;
  public query: string;

  constructor(
    public wordpress: WordpressService,
    public route: Router
  ) { }

  ngOnInit(): void { }

  public btnClick() {
    this.active = !this.active;
    if (this.active) {
      this.$input.nativeElement.focus();
    }
  }

  public onSubmit() {
    console.log('SEARCH!', this.query);
    this.route.navigate(['/search'], {
      queryParams: {
        's': this.query
      }
    });
  }

}
