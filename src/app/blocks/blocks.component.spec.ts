import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlocksComponent } from './blocks.component';
import { Stub } from 'src/testing/stub';

describe('BlocksComponent', () => {
  let component: BlocksComponent;
  let fixture: ComponentFixture<BlocksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        BlocksComponent,
        Stub.Component({
          selector: 'app-youtube',
          inputs: [
            'attrs'
          ]
        }),
        Stub.Component({
          selector: 'app-gallery',
          inputs: [
            'attrs'
          ]
        }),
        Stub.Component({
          selector: 'app-latest-posts',
          inputs: [
            'attrs'
          ]
        }),
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
