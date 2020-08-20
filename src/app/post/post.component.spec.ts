import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostComponent } from './post.component';
import { WordpressService } from '../services/wordpress.service';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Stub } from 'src/testing/stub';

describe('PostComponent', () => {
  let component: PostComponent;
  let fixture: ComponentFixture<PostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PostComponent,
        Stub.Component({
          selector: 'app-author',
          inputs: [
            'id'
          ]
        }),
        Stub.Component({
          selector: 'app-blocks',
          inputs: [
            'blocks'
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
        HttpClientTestingModule
      ],
      providers: [
        WordpressService,
        {
          provide: ActivatedRoute,
          useValue: Stub.ActivatedRoute()
        }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
