import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialsComponent } from './socials.component';
import { WordpressService } from 'src/app/services/wordpress.service';
import { Stub } from 'src/testing/stub';

describe('SocialsComponent', () => {
  let component: SocialsComponent;
  let fixture: ComponentFixture<SocialsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SocialsComponent,
        Stub.Component({
          selector: 'i-feather',
          inputs: [
            'name'
          ]
        })
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
    fixture = TestBed.createComponent(SocialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
