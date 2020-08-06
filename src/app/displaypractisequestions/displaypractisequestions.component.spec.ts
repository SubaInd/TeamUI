import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaypractisequestionsComponent } from './displaypractisequestions.component';

describe('DisplaypractisequestionsComponent', () => {
  let component: DisplaypractisequestionsComponent;
  let fixture: ComponentFixture<DisplaypractisequestionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplaypractisequestionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplaypractisequestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
