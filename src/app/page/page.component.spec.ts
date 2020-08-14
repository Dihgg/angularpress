import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageComponent } from './page.component';
import { Stub } from 'src/testing/stub';
import { WordpressService } from '../services/wordpress.service';
import { ActivatedRoute } from '@angular/router';

describe('PageComponent', () => {
  let component: PageComponent;
  let fixture: ComponentFixture<PageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PageComponent,
        Stub.Component({
          selector: 'app-blocks',
          inputs: [
            'blocks'
          ]
        }),
        Stub.Component({
          selector: 'app-loading',
          inputs: [
            'loading'
          ]
        }),
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
    fixture = TestBed.createComponent(PageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
