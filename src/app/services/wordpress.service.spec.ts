import { TestBed } from '@angular/core/testing';

import { WordpressService } from './wordpress.service';
import { HttpClientModule } from '@angular/common/http';
import { Location } from '@angular/common';
import { Title } from '@angular/platform-browser';

describe('WordpressService', () => {
  let service: WordpressService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        Location,
        Title
      ],
      imports: [
        HttpClientModule,
      ]
    });
    service = TestBed.inject(WordpressService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
