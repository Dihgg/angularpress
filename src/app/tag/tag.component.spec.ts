import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TagComponent } from './tag.component';
import { WordpressService } from '../services/wordpress.service';
import { Stub } from 'src/testing/stub';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute } from '@angular/router';

describe('TagComponent', () => {
  let component: TagComponent;
  let fixture: ComponentFixture<TagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TagComponent,
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
    fixture = TestBed.createComponent(TagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('reload', () => {
    beforeEach(() => {
      jest.spyOn(component.wordpress, 'getTags');
    });
    it('should reload', () => {
      jest.spyOn(component.route.snapshot.paramMap, 'get').mockReturnValue('another-mock');
      component.reload();
      expect(component.wordpress.getTags).toBeCalled();
    });
    it('should not reload', () => {
      component.reload();
      expect(component.wordpress.getTags).not.toBeCalled();
    });
  });

});
