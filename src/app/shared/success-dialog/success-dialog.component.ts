import { Component, OnInit, Inject, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig } from '@angular/material/dialog';
import { DatePipe } from '@angular/common';
import {ReactiveFormsModule, FormBuilder, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-success-dialog',
  templateUrl: './success-dialog.component.html',
  styleUrls: ['./success-dialog.component.css']
})
export class SuccessDialogComponent implements OnInit {

  close() {
    this.dialogRef.close();
  }

   constructor(private builder: FormBuilder, public dialogRef: MatDialogRef<SuccessDialogComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    console.log(data);
    
   }

  ngOnInit(): void {
  }

}
