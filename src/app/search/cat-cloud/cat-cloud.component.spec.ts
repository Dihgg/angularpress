import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatCloudComponent } from './cat-cloud.component';

describe('CatCloudComponent', () => {
  let component: CatCloudComponent;
  let fixture: ComponentFixture<CatCloudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatCloudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatCloudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
