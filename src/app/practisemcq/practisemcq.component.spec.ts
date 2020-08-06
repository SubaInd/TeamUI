import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PractisemcqComponent } from './practisemcq.component';

describe('PractisemcqComponent', () => {
  let component: PractisemcqComponent;
  let fixture: ComponentFixture<PractisemcqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PractisemcqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PractisemcqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
