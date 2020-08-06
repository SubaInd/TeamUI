import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventdayadminComponent } from './eventdayadmin.component';

describe('EventdayadminComponent', () => {
  let component: EventdayadminComponent;
  let fixture: ComponentFixture<EventdayadminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventdayadminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventdayadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
