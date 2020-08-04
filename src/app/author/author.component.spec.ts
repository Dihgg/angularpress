import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorComponent } from './author.component';
import { WordpressService } from '../services/wordpress.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AuthorComponent', () => {
  let component: AuthorComponent;
  let fixture: ComponentFixture<AuthorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthorComponent ],
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        WordpressService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
