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

  beforeEach(() => {
    jest.spyOn(component.router, 'navigate').mockImplementation(() => null);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should activate', () => {
    component.btnClick();
    expect(component.active).toBeTruthy();
  });

  it('should deactivate', () => {
    component.active = true;
    component.btnClick();
    expect(component.active).toBeFalsy();
  });

  it('should submit', () => {
    component.query = 'mock query';
    component.onSubmit();
    expect(component.router.navigate).toBeCalled();
  });

  it('should not submit', () => {
    component.query = '';
    component.onSubmit();
    expect(component.active).toBeFalsy();
  });

  it('should close', () => {
    component.onClose();
    expect(component.active).toBeFalsy();
  });

  it('should close on documentClick', () => {
    component.documentClick(null);
    expect(component.active).toBeFalsy();
  });
});
