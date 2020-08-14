import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostComponent } from './post.component';
import { Stub } from 'src/testing/stub';
import { WordpressService } from 'src/app/services/wordpress.service';
import { RouterTestingModule } from '@angular/router/testing';
import { TruncatePipe } from 'src/app/pipes/truncate.pipe';
import { Mock } from 'src/testing/mock';

describe('PostComponent', () => {
  let component: PostComponent;
  let fixture: ComponentFixture<PostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PostComponent,
        TruncatePipe,
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
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostComponent);
    component = fixture.componentInstance;
    component.post = Mock.Post();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
