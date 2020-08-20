import { TestBed, async } from '@angular/core/testing';

import { WordpressService } from './wordpress.service';
import { Location } from '@angular/common';
import { Mock, Title } from 'src/testing/mock';
import { API } from 'src/testing/api';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { Params } from '@angular/router';

import * as spyRx from 'rxjs';

describe('WordpressService', () => {
  let service: WordpressService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        Location,
        {
          provide: Title,
          useValue: new Title()
        }
      ],
      imports: [
        HttpClientTestingModule,
      ]
    });
    service = TestBed.inject(WordpressService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  beforeEach(() => {
    service.setTHEME(Mock.getTHEME());
  });

  beforeEach(() => {
    jest.spyOn(spyRx, 'throwError');
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should set THEME', () => {
    expect(service.THEME.NAME).toBe(Mock.getTHEME().NAME);
  });

  describe('TRANSLATIONS', () => {
    it('should set and retrieve translation', () => {
      service.setTRANSLATION({ foo: 'bar' });
      expect(service.translate('foo')).toBe('bar');
    });

    it('should retrieve input if translation not found', () => {
      expect(service.translate('mock')).toBe('mock');
    });
  });

  it('should set title', () => {
    service.setTitle('mock');
    const title = service.getTitle();
    expect(title).toBe('mock | MOCK');
  });

  it('should get router link', () => {
    const res = service.routerLink('http://mockurl.com/mock');
    expect(res).toBe('/mock');
  });

  describe('hasLogo', () => {

    it('has header desktop logo', () => {
      const res = service.hasLogo();
      expect(res).toBe(true);
    });

    it('has header mobile logo', () => {
      const theme = Mock.getTHEME();
      theme.logos.header.desktop = '';
      service.setTHEME(theme);
      const res = service.hasLogo();
      expect(res).toBe(true);
    });

    it('not have any logo', () => {
      const theme = Mock.getTHEME();
      theme.logos.header.desktop = '';
      theme.logos.header.mobile = '';
      service.setTHEME(theme);
      const res = service.hasLogo();
      expect(res).toBe(false);
    });
  });

  describe('get Post', () => {
    it('success', () => {
      service.getPost(1).subscribe((post) => {
        expect(post).toBeTruthy();
      });

      const req = httpMock.expectOne(`${service.URL}posts/1`);
      expect(req.request.method).toEqual('GET');
      req.flush([
        API.Post(),
        API.Post({
          featured_media: undefined
        })
      ], {
        headers: {
          'X-WP-Total': Mock.PostResponse().total,
          'X-WP-TotalPages': Mock.PostResponse().pages
        } as Params
      });
    });

    it('error', () => {
      service.getPost(1).subscribe(
        (post) => ({}),
        (error) => {
          expect(error).toBeTruthy();
        }
      );
      expect(spyRx.throwError).toBeCalled();
      const req = httpMock.expectOne(`${service.URL}posts/1`).error(new ErrorEvent('network error'));
    });
  });

  describe('get posts', () => {
    it('success', () => {
      service.getPosts({}).subscribe((posts) => {
        expect(posts).toBeTruthy();
      });

      const req = httpMock.expectOne(`${service.URL}posts`);
      expect(req.request.method).toEqual('GET');
      req.flush([
        API.Post(),
        API.Post({
          featured_media: undefined
        })
      ], {
        headers: {
          'X-WP-Total': Mock.PostResponse().total,
          'X-WP-TotalPages': Mock.PostResponse().pages
        } as Params
      });
    });

    it('error', () => {
      service.getPosts({}).subscribe(
        (posts) => ({}),
        (error) => {
          expect(error).toBeTruthy();
        }
      );
      expect(spyRx.throwError).toBeCalled();
      const req = httpMock.expectOne(`${service.URL}posts`).error(new ErrorEvent('network error'));
    });

  });

  describe('get user', () => {
    it('success', () => {
      service.getUser(1).subscribe((user) => {
        expect(user).toBeTruthy();
      });

      const req = httpMock.expectOne(`${service.URL}users/1`);
      expect(req.request.method).toEqual('GET');

      req.flush(API.User(), {
        headers: {}
      });
    });
    it('error', () => {
      service.getUser(1).subscribe(
        (user) => ({}),
        (error) => {
          expect(error).toBeTruthy();
        }
      );
      expect(spyRx.throwError).toBeCalled();
      const req = httpMock.expectOne(`${service.URL}users/1`).error(new ErrorEvent('network error'));
    });
  });

  describe('get Menu', () => {
    it('success', () => {
      service.getMenu('mock').subscribe((menu) => {
        expect(menu).toBeTruthy();
      });

      const url = new URL(`${service.URL}menu`);
      url.searchParams.append('location', 'mock');

      const req = httpMock.expectOne(url.href);
      expect(req.request.method).toEqual('GET');

      req.flush([
        API.MenuItem(),
        API.MenuItem({
          post_type: 'custom'
        }),
        API.MenuItem({
          menu_item_parent: 1
        }),
        API.MenuItem({
          menu_item_parent: 1
        }),
        API.MenuItem({
          menu_item_parent: 2
        })
      ]);
    });
    it('error', () => {
      service.getMenu('mock').subscribe(
        (menu) => ({}),
        (error) => {
          expect(error).toBeTruthy();
        }
      );

      const url = new URL(`${service.URL}menu`);
      url.searchParams.append('location', 'mock');
      expect(spyRx.throwError).toBeCalled();
      const req = httpMock.expectOne(url.href).error(new ErrorEvent('network error'));
    });

  });

  describe('get media', () => {
    it('success', () => {
      service.getMedia(1).subscribe((media) => {
        expect(media).toBeTruthy();
      });

      const req = httpMock.expectOne(`${service.URL}media/1`);
      expect(req.request.method).toEqual('GET');
      req.flush(API.Media());
    });

    it('error', () => {
      service.getMedia(1).subscribe(
        (media) => ({}),
        (error) => {
          expect(error).toBeTruthy();
        }
      );
      expect(spyRx.throwError).toBeCalled();

      const req = httpMock.expectOne(`${service.URL}media/1`).error(new ErrorEvent('network error'));
    });
  });

  describe('search', () => {
    it('success', () => {
      service.search({
        search: 'mock'
      }).subscribe((result) => {
        expect(result).toBeTruthy();
      });

      const url = new URL(`${service.URL}search`);
      url.searchParams.append('search', 'mock');

      const req = httpMock.expectOne(url.href);
      expect(req.request.method).toEqual('GET');

      req.flush([API.Search()]);
    });

    it('error', () => {
      service.search({
        search: 'mock'
      }).subscribe(
        (search) => ({}),
        (error) => {
          expect(error).toBeTruthy();
        }
      );
      expect(spyRx.throwError).toBeCalled();

      const url = new URL(`${service.URL}search`);
      url.searchParams.append('search', 'mock');

      const req = httpMock.expectOne(url.href).error(new ErrorEvent('network error'));
    });
  });

  describe('get category', () => {
    it('success', () => {
      service.getCategories({
        post: 1
      }).subscribe((categories) => {
        expect(categories).toBeTruthy();
      });

      const url = new URL(`${service.URL}categories`);
      url.searchParams.append('post', '1');

      const req = httpMock.expectOne(url.href);
      expect(req.request.method).toEqual('GET');

      req.flush([API.Category()]);
    });

    it('error', () => {
      service.getCategories({
        post: 1
      }).subscribe(
        (categories) => ({}),
        (error) => {
          expect(error).toBeTruthy();
        }
      );
      expect(spyRx.throwError).toBeCalled();

      const url = new URL(`${service.URL}categories`);
      url.searchParams.append('post', '1');

      const req = httpMock.expectOne(url.href).error(new ErrorEvent('network error'));
    });
  });

  describe('get tag', () => {
    it('success', () => {
      service.getTags({
        post: 1
      }).subscribe((tags) => {
        expect(tags).toBeTruthy();
      });

      const url = new URL(`${service.URL}tags`);
      url.searchParams.append('post', '1');

      const req = httpMock.expectOne(url.href);
      expect(req.request.method).toEqual('GET');

      req.flush([API.Tag()]);
    });

    it('error', () => {
      service.getTags({
        post: 1
      }).subscribe(
        (tags) => ({}),
        (error) => {
          expect(error).toBeTruthy();
        }
      );
      expect(spyRx.throwError).toBeCalled();

      const url = new URL(`${service.URL}tags`);
      url.searchParams.append('post', '1');

      const req = httpMock.expectOne(url.href).error(new ErrorEvent('network error'));
    });
  });

  afterEach(() => {
    httpMock.verify();
  });
});
