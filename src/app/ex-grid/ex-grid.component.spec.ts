import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExGridComponent } from './ex-grid.component';

describe('ExGridComponent', () => {
  let component: ExGridComponent;
  let fixture: ComponentFixture<ExGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
