import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateemailtemplatesComponent } from './createemailtemplates.component';

describe('CreateemailtemplatesComponent', () => {
  let component: CreateemailtemplatesComponent;
  let fixture: ComponentFixture<CreateemailtemplatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateemailtemplatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateemailtemplatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
