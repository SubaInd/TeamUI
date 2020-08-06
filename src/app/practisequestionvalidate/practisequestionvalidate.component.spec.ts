import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PractisequestionvalidateComponent } from './practisequestionvalidate.component';

describe('PractisequestionvalidateComponent', () => {
  let component: PractisequestionvalidateComponent;
  let fixture: ComponentFixture<PractisequestionvalidateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PractisequestionvalidateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PractisequestionvalidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
