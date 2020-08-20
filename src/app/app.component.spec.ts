import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { Stub } from 'src/testing/stub';
import { WordpressService } from './services/wordpress.service';
import { global } from '@angular/compiler/src/util';
import { ElementRef } from '@angular/core';

describe('AppComponent', () => {
  beforeEach(async(() => {
    global.TAGS = {
      html: `lang="pt-BR"`,
      body: `class="page-template-default page page-id-101 theme--bg theme--color"`
    };

    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent,
        Stub.Component({
          selector: 'app-header'
        }),
        Stub.Component({
          selector: 'app-footer'
        }),
      ],
      providers: [
        {
          provide: WordpressService,
          useValue: Stub.Wordpress()
        },
        {
          provide: ElementRef,
          useValue: Stub.ElementRef()
        }
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
