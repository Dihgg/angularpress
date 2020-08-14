import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { WordpressService } from 'src/app/services/wordpress.service';
import { Stub } from 'src/testing/stub';
import { IconsModule } from '../icons/icons.module';
import { LogoModule } from '../logo/logo.module';
import { MenuModule } from '../menu/menu.module';
import { HomeComponent } from 'src/app/home/home.component';
import { SearchBarModule } from '../searchbar/searchbar.module';
import { SearchComponent } from 'src/app/search/search.component';
import { PageComponent } from 'src/app/page/page.component';
import { PostComponent } from 'src/app/post/post.component';
import { CategoryComponent } from 'src/app/category/category.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HeaderComponent,
        Stub.Component({
          selector: 'app-logo'
        }),
        Stub.Component({
          selector: 'i-feather'
        }),
        Stub.Component({
          selector: 'app-menu',
          inputs: [
            'location',
            'classes',
            'showHome'
          ]
        }),
        Stub.Component({
          selector: 'app-socials'
        }),
        Stub.Component({
          selector: 'app-searchbar'
        }),
      ],
      imports: [],
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
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
