import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryComponent } from './category.component';
import { Stub } from 'src/testing/stub';
import { RouterTestingModule } from '@angular/router/testing';
import { WordpressService } from '../services/wordpress.service';
import { ActivatedRoute } from '@angular/router';

describe('CategoryComponent', () => {
  let component: CategoryComponent;
  let fixture: ComponentFixture<CategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CategoryComponent,
        Stub.Component({
          selector: 'app-post',
          inputs: [
            'post',
            'options'
          ]
        }),
        Stub.Component({
          selector: 'app-loading',
          inputs: [
            'loading'
          ]
        })
      ],
      imports: [
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
    fixture = TestBed.createComponent(CategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should reload', () => {
    jest.spyOn(component.wordpress, 'getCategories');
    component.reload();
    expect(component.wordpress.getCategories).toBeCalled();
  });
});
