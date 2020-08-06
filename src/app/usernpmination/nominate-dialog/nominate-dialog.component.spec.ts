import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NominateDialogComponent } from './nominate-dialog.component';

describe('NominateDialogComponent', () => {
  let component: NominateDialogComponent;
  let fixture: ComponentFixture<NominateDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NominateDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NominateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
