import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsdaysmeComponent } from './eventsdaysme.component';

describe('EventsdaysmeComponent', () => {
  let component: EventsdaysmeComponent;
  let fixture: ComponentFixture<EventsdaysmeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventsdaysmeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsdaysmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
