import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuComponent } from './menu.component';
import { Stub } from 'src/testing/stub';
import { WordpressService } from 'src/app/services/wordpress.service';

describe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MenuComponent,
        Stub.Component({
          selector: 'app-menu-link',
          inputs: [
            'link'
          ]
        }),
        Stub.Component({
          selector: 'i-feather',
          inputs: [
            'name'
          ]
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
    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
