import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchComponent } from './search.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute, Router, NavigationEnd, NavigationStart } from '@angular/router';
import { Stub } from 'src/testing/stub';
import { FormsModule } from '@angular/forms';
import { WordpressService } from '../services/wordpress.service';
import { of, Subscription } from 'rxjs';
import { SearchReponse, PostResponse, Post } from '../services/wordpress.interface';
import { Mock } from 'src/testing/mock';
import * as spyWordpress from '../services/wordpress.service';

// const eventSubject = Stub.EventSubject();

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SearchComponent,
        Stub.Component({
          selector: 'i-feather',
          inputs: [
            'name'
          ]
        }),
        Stub.Component({
          selector: 'app-loading',
          inputs: [
            'loading'
          ]
        }),
        Stub.Component({
          selector: 'app-post',
          inputs: [
            'post',
            'options'
          ]
        }),
        Stub.Component({
          selector: 'app-search-form',
          inputs: [
            'query'
          ]
        }),
        Stub.Component({
          selector: 'app-cat-cloud',
          inputs: [
            'title',
            'items'
          ]
        }),
        Stub.Component({
          selector: 'app-filter-cloud',
          inputs: [
            'filters',
          ],
          outputs: [
            'remove'
          ]
        })
      ],
      imports: [
        RouterTestingModule,
        FormsModule
      ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: Stub.ActivatedRoute()
        },
        {
          provide: WordpressService,
          useValue: Stub.Wordpress()
        },
        /* {
          provide: Router,
          useValue: Stub.Router(eventSubject)
        } */
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach(() => {
    jest.spyOn(component.router, 'navigate').mockImplementation(() => null);
    jest.spyOn(spyWordpress, 'isTag');
    jest.spyOn(spyWordpress, 'isCategory');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should submit', () => {
    component.onSubmit('query');
    expect(component.router.navigate).toBeCalled();
  });

  /* it('should return empty search', () => {
    jest.spyOn(component.wordpress, 'search').mockReturnValue(of<SearchReponse>({
      pages: 0,
      total: 0,
      results: []
    }));
    component.ngOnInit();
    expect(component).toBeTruthy();
  }); */

  describe('load more', () => {
    beforeEach(() => {
      jest.spyOn(component.wordpress, 'getPosts');
    });
    it('should load more', () => {
      component.categories = [Mock.Category()];
      component.tags = [Mock.Tag()];
      component.loadMore();
      expect(component.wordpress.getPosts).toBeCalled();
    });
    it('should have more pages', () => {
      jest.spyOn(component.wordpress, 'getPosts').mockReturnValue(of<PostResponse>(Mock.PostResponse({
        pages: 3,
        total: 36,
        posts: new Array<Post>(36).fill(Mock.Post())
      })));
      component.loadMore();
      expect(component.wordpress.getPosts).toBeCalled();
    });
    it('should not load more', () => {
      jest.spyOn(component.wordpress, 'getPosts').mockReturnValue(of<PostResponse>(Mock.PostResponse({}, [])));
      component.loadMore();
      expect(component.wordpress.getPosts).toBeCalled();
    });
  });

  describe('add filter', () => {
    it('should add category as filter', () => {
      component.addFilter(Mock.Category());
      expect(component.router.navigate).toBeCalled();
    });

    it('should add tag as filter', () => {
      component.addFilter(Mock.Tag());
      expect(component.router.navigate).toBeCalled();
    });

    it('should not add filter', () => {
      const category = Mock.Category();
      component.filters = [
        category
      ];
      component.addFilter(category);
      expect(component.router.navigate).not.toBeCalled();
    });
  });

  describe('remove filter', () => {
    it('should remove filter', () => {
      component.filters = [
        Mock.Category()
      ];
      component.removeFilter(0);
      expect(component.filters.length).toBe(0);
    });
  });

  it('should call isTag', () => {
    component.isTag(Mock.Tag());
    expect(spyWordpress.isTag).toBeCalled();
  });

  it('Change route', () => {
    // const url = new URL(`${WordpressService.BASE_HREF}/search`);
    // url.searchParams.append('search', 'search');
    component.router.navigate(['/search'], {
      queryParams: {
        search: 'another-search-mock',
        categories: [1],
        tags: [1]
      }
    });
  });

  /* it('Change route', () => {
    console.log('change route');
    const url = new URL(WordpressService.BASE_HREF);
    url.searchParams.append('search', 'search');
    url.searchParams.append('categories', '1');
    url.searchParams.append('tags', '1');
    const event = new NavigationStart(1, `/search${url.searchParams.toString()}`);
    console.log('change route', `/search${url.searchParams.toString()}`);
    eventSubject.next(event);
    // const sub = new Subscription();
    // jest.spyOn(component.route.queryParams, 'subscribe').mockImplementation(of({}))
    // component.ngOnInit();
    // expect(1).toBe(1);
  }); */
});
