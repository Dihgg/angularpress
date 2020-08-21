import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestPostsComponent } from './latest-posts.component';
import { Stub } from 'src/testing/stub';
import { WordpressService } from 'src/app/services/wordpress.service';

describe('LatestPostsComponent', () => {
  let component: LatestPostsComponent;
  let fixture: ComponentFixture<LatestPostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        LatestPostsComponent,
        Stub.Component({
          selector: 'app-post',
          inputs: [
            'post',
            'options'
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
    fixture = TestBed.createComponent(LatestPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('should set attrs', () => {
    const attrs = {
      postsToShow: 1,
      order: 'asc',
      orderBy: 'name',
      categories: [],
      displayPostDate: false,
      displayPostContent: false,
      displayPostContentRadio: false,
      excerptLength: 55,
      displayFeaturedImage: false,
      featuredImageAlign: 'left',
      postLayout: 'grid',
      columns: 3,
    };

    it('should set attrs', () => {
      component.attrs = Object.assign({
        align: 'left',
        className: 'mock'
      }, attrs);
      expect(component).toBeTruthy();
    });

    it('should set attrs with defaults', () => {
      component.attrs = attrs;
      expect(component).toBeTruthy();
    });

  });

});
