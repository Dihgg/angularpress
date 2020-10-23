import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterCloudComponent } from './filter-cloud.component';
import { WordpressService } from 'src/app/services/wordpress.service';
import { Stub } from 'src/testing/stub';

import * as SpyWordpress from 'src/app/services/wordpress.service';
import { Mock } from 'src/testing/mock';

describe('FilterCloudComponent', () => {
  let component: FilterCloudComponent;
  let fixture: ComponentFixture<FilterCloudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        FilterCloudComponent,
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
    fixture = TestBed.createComponent(FilterCloudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach(() => {
    jest.spyOn(SpyWordpress, 'isTag');
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should verify if is tag', () => {
    component.isTag(Mock.Tag());
    expect(SpyWordpress.isTag).toBeCalled();
  });
});
