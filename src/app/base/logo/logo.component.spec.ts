import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoComponent } from './logo.component';
import { RouterTestingModule } from '@angular/router/testing';
import { WordpressService } from 'src/app/services/wordpress.service';
import { Stub } from 'src/testing/stub';

describe('LogoComponent', () => {
  let component: LogoComponent;
  let fixture: ComponentFixture<LogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogoComponent ],
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
    fixture = TestBed.createComponent(LogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('creation', () => {
    it('should create', () => {
      expect(component).toBeTruthy();
    });
    it('should create with footer option', () => {
      component.footer = true;
      component.ngOnInit();
      expect(component).toBeTruthy();
    });

    it('should create with footer logo not set', () => {
      jest.spyOn(component.wordpress, 'hasLogo').mockReturnValue(false);
      component.footer = true;
      component.ngOnInit();
      expect(component).toBeTruthy();
    });

  });


});
