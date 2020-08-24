import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchiveComponent } from './archive.component';
import { Stub } from 'src/testing/stub';
import { RouterTestingModule } from '@angular/router/testing';
import { WordpressService } from '../services/wordpress.service';
import { ActivatedRoute, RouterEvent, NavigationEnd, Router, NavigationStart } from '@angular/router';
import { Category, Tag } from '../services/wordpress.interface';
import { Mock } from 'src/testing/mock';
import { ReplaySubject } from 'rxjs';

const eventSubject = Stub.EventSubject();

describe('ArchiveComponent', () => {
  let component: ArchiveComponent;
  let fixture: ComponentFixture<ArchiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ArchiveComponent,
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
        },
        {
          provide: Router,
          useValue: Stub.Router(eventSubject)
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should reload', () => {
    component.reload();
    expect(component.loading).toBeTruthy();
  });

  describe('loadMore', () => {
    beforeEach(() => {
      jest.spyOn(component, 'loadMore');
    });
    it('should load Category', () => {
      const category: Category = Mock.Category();
      component.loadPosts(category);
    });
    it('should load Tag', () => {
      const tag: Tag = Mock.Tag();
      component.loadPosts(tag);
    });
    afterEach(() => {
      expect(component.loadMore).toBeCalled();
    });
  });

  it('should load more', () => {
    jest.spyOn(component.wordpress, 'getPosts');
    component.loadMore();
    expect(component.wordpress.getPosts).toBeCalled();
  });

  describe('Navigation', () => {
    beforeEach(() => {
      jest.spyOn(component, 'reload');
    });

    it('Navigate end', () => {
      const event = new NavigationEnd(1, '/tag/mock', '/tag/mock2');
      eventSubject.next(event);
      component.ngOnInit();
      expect(component.reload).toBeCalled();
    });

    it('Navigate end', () => {
      const event = new NavigationStart(2, '/tag/mock');
      eventSubject.next(event);
      component.ngOnInit();
      expect(component.reload).not.toBeCalled();
    });

  });
});
