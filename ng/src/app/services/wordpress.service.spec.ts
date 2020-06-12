import { TestBed } from '@angular/core/testing';

import { WordpressService } from './wordpress.service';
import { HttpClientModule } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

describe('WordpressService', () => {
  let service: WordpressService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ]
    });
    service = TestBed.inject(WordpressService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
