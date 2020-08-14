import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterComponent } from './footer.component';
import { Stub } from 'src/testing/stub';
import { WordpressService } from 'src/app/services/wordpress.service';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        FooterComponent,
        Stub.Component({
          selector: 'app-logo',
          inputs: [
            'footer'
          ]
        }),
        Stub.Component({
          selector: 'app-menu',
          inputs: [
            'location',
            'showHome'
          ]
        }),
        Stub.Component({
          selector: 'app-socials'
        }),
      ],
      providers: [
        {
          provide: WordpressService,
          useValue: Stub.Wordpress()
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
