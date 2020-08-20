import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryComponent } from './gallery.component';
import { Stub } from 'src/testing/stub';
import { WordpressService } from 'src/app/services/wordpress.service';

describe('GalleryComponent', () => {
  let component: GalleryComponent;
  let fixture: ComponentFixture<GalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        GalleryComponent,
        Stub.Component({
          selector: 'ngu-carousel',
          inputs: [
            'inputs',
            'dataSource'
          ] 
        }),
        Stub.Component({
          selector: 'ngu-tile',
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
    fixture = TestBed.createComponent(GalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set attrs', () => {
    component.attrs = {
      'ids': [1,2,3],
      'columns': 3,
      'align': 'left',
      'className': 'mock'
    };
    component.ngOnInit();
    expect(component).toBeTruthy();
  });

  it('should set attrs with defaults', () => {
    component.attrs = {
      'ids': [1,2,3],
      'columns': 3,
    };
    component.ngOnInit();
    expect(component).toBeTruthy();
  });
});
