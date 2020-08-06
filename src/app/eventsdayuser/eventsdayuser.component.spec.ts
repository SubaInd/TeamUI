import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsdayuserComponent } from './eventsdayuser.component';

describe('EventsdayuserComponent', () => {
  let component: EventsdayuserComponent;
  let fixture: ComponentFixture<EventsdayuserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventsdayuserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsdayuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
