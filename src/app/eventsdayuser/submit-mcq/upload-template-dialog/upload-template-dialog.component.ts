import { Component, OnInit, Inject, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig } from '@angular/material/dialog';
import { DatePipe } from '@angular/common';
import {ReactiveFormsModule, FormBuilder, FormControl, FormGroup} from '@angular/forms';
import { HttpClient, HttpParams } from '@angular/common/http';
import { MCQDetails } from '../submit-mcq.component';

@Component({
  selector: 'app-success-dialog',
  templateUrl: './upload-template-dialog.component.html',
  styleUrls: ['./upload-template-dialog.component.scss']
})
export class UploadTemplateDialogComponent implements OnInit {

  userFile: any = File;

  constructor(private httpClient: HttpClient, private builder: FormBuilder, public dialogRef: MatDialogRef<UploadTemplateDialogComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    console.log(data);
    
   }

   onSelectFile(event) {
      const file = event.target.files[0];
      console.log(file);
      this.userFile = file;
   }

   upload() {
      this.dialogRef.close({ event: 'close', data: this.userFile});
      return this.httpClient.post<MCQDetails>("http://localhost:8003/eventDay/uploadMCQFile", this.userFile);
   }

  close() {
    this.dialogRef.close();
  }

  ngOnInit(): void {
      
  }
}