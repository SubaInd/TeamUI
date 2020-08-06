import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventDateDialogComponent } from './event-date-dialog.component';

describe('EventDateDialogComponent', () => {
  let component: EventDateDialogComponent;
  let fixture: ComponentFixture<EventDateDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventDateDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventDateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
