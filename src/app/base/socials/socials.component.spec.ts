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

  it('should get icon name', () => {
    const icon = component.getIcon('https://facebook.com/dummy');
    expect(icon).toBe('facebook');
  });

  it('should get icon default name', () => {
    const icon = component.getIcon('https://dummt.com/dummy');
    expect(icon).toBe('external-link');
  });
});
