import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchComponent } from './search.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute } from '@angular/router';
import { Stub } from 'src/testing/stub';
import { FormsModule } from '@angular/forms';
import { WordpressService } from '../services/wordpress.service';
import { of } from 'rxjs';
import { SearchReponse } from '../services/wordpress.interface';

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
        Stub.Component({
          selector: 'app-cat-cloud',
          inputs: [
            'title',
            'items'
          ],
          outputs: [
            'clicked'
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

  beforeEach(() => {
    jest.spyOn(component.router, 'navigate').mockImplementation(() => null);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should submit', () => {
    component.onSubmit();
    expect(component.router.navigate).toBeCalled();
  });

  it('should return empty search', () => {
    jest.spyOn(component.wordpress, 'search').mockReturnValue(of<SearchReponse>({
      pages: 1,
      total: 0,
      results: []
    }));
    component.ngOnInit();
    expect(component).toBeTruthy();
  });
});
