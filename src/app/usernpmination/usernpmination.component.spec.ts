import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsernpminationComponent } from './usernpmination.component';

describe('UsernpminationComponent', () => {
  let component: UsernpminationComponent;
  let fixture: ComponentFixture<UsernpminationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsernpminationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsernpminationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
