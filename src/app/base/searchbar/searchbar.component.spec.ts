import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchbarComponent } from './searchbar.component';
import { FormsModule } from '@angular/forms';
import { WordpressService } from 'src/app/services/wordpress.service';
import { Stub } from 'src/testing/stub';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('SearchbarComponent', () => {
  let component: SearchbarComponent;
  let fixture: ComponentFixture<SearchbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SearchbarComponent,
        Stub.Component({
          selector: 'i-feather'
        })
      ],
      imports: [
        FormsModule,
        RouterTestingModule
      ],
      providers: [
        {
          provide: WordpressService,
          useValue: Stub.Wordpress()
        },
        {
          provide: ActivatedRoute,
          useValue: Stub.ActivatedRoute()
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
