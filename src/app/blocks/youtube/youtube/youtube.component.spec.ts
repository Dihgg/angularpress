import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YoutubeComponent } from './youtube.component';
import { Stub } from 'src/testing/stub';

describe('YoutubeComponent', () => {
  let component: YoutubeComponent;
  let fixture: ComponentFixture<YoutubeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        YoutubeComponent,
        Stub.Component({
          selector: 'youtube-player',
          inputs: [
            'videoId'
          ]
        })
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YoutubeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
