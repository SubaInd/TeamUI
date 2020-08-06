import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitMcqComponent } from './submit-mcq.component';

describe('SubmitMcqComponent', () => {
  let component: SubmitMcqComponent;
  let fixture: ComponentFixture<SubmitMcqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmitMcqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitMcqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
