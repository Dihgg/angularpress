import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchComponent } from './search.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute } from '@angular/router';
import { Stub } from 'src/testing/stub';
import { FormsModule } from '@angular/forms';
import { WordpressService } from '../services/wordpress.service';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SearchComponent,
        Stub.Component({
          selector: 'i-feather',
          inputs: [
            'name'
          ]
        }),
        Stub.Component({
          selector: 'app-loading',
          inputs: [
            'loading'
          ]
        }),
        Stub.Component({
          selector: 'app-post',
          inputs: [
            'post',
            'options'
          ]
        }),
      ],
      imports: [
        RouterTestingModule,
        FormsModule
      ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: Stub.ActivatedRoute()
        },
        {
          provide: WordpressService,
          useValue: Stub.Wordpress()
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
