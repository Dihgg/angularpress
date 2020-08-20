import { Component, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';
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
    public router: Router,
    public route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.query = params.query;
    });
  }

  public btnClick() {
    this.active = !this.active;
    if (this.active) {
      this.$input.nativeElement.focus();
    }
  }

  public onSubmit() {
    if (this.query) {
      this.router.navigate(['/search'], {
        queryParams: {
          query: this.query
        }
      });
    } else {
      this.active = false;
    }
  }

  public onClose(): void {
    this.query = '';
    this.active = false;
  }

  @HostListener('document:click', ['$event'])
  public documentClick(event: MouseEvent) {
    this.active = false;
  }

}
