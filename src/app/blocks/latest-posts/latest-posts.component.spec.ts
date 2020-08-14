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
});
