import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TriggermailsComponent } from './triggermails.component';

describe('TriggermailsComponent', () => {
  let component: TriggermailsComponent;
  let fixture: ComponentFixture<TriggermailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TriggermailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TriggermailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
