import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadTemplateDialogComponent } from './upload-template-dialog.component';

describe('UploadTemplateDialogComponent', () => {
  let component: UploadTemplateDialogComponent;
  let fixture: ComponentFixture<UploadTemplateDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadTemplateDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadTemplateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
