import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuComponent } from './menu.component';
import { Stub } from 'src/testing/stub';
import { WordpressService } from 'src/app/services/wordpress.service';
import { ElementRef } from '@angular/core';
import { of } from 'rxjs';
import { MenuItem } from 'src/app/services/wordpress.interface';
import { Mock } from 'src/testing/mock';

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
        })
      ],
      providers: [
        {
          provide: WordpressService,
          useValue: Stub.Wordpress()
        },
        {
          provide: ElementRef,
          useValue: Stub.ElementRef()
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

  it('should have submenus', () => {
    component.ngOnInit();
    expect(component).toBeTruthy();
  });

  it('should not have submenus', () => {
    jest.spyOn(component.wordpress, 'getMenu').mockReturnValue(of<MenuItem[]>([
      Mock.getMenuItem({
        target: '_blank'
      }, [
        Mock.getMenuItem()
      ])
    ]));
    component.ngOnInit();
    expect(component).toBeTruthy();
  });

  it('should toggle Submenu', () => {
    component.$submenu = Stub.ElementRef();
    component.$submenu.nativeElement.firstChild.offsetHeight = 100;
    // component.ngOnInit();
    component.toggleSubmenu();
    expect(component.submenuH).toBe(100);
  });

  it('should toggle Submenu', () => {
    component.$submenu = Stub.ElementRef();
    // component.ngOnInit();
    component.submenu = true;
    component.toggleSubmenu();
    expect(component.submenuH).toBe(0);
  });
});
