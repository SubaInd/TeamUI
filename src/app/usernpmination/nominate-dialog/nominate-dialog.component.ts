import { Component, OnInit, Inject, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig } from '@angular/material/dialog';
import { DatePipe } from '@angular/common';
import {ReactiveFormsModule, FormBuilder, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-nominate-dialog',
  templateUrl: './nominate-dialog.component.html',
  styleUrls: ['./nominate-dialog.component.css']
})
export class NominateDialogComponent implements OnInit {

  constructor(private builder: FormBuilder, public dialogRef: MatDialogRef<NominateDialogComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    console.log(data);
    
   }

  close() {
    this.dialogRef.close();
  }

  ngOnInit(): void {
      
  }
}