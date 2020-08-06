import { Component, OnInit, Inject, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig } from '@angular/material/dialog';
import { DatePipe } from '@angular/common';
import {ReactiveFormsModule, FormBuilder, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'event-date-dialog',
  templateUrl: './event-date-dialog.component.html',
  styleUrls: ['./event-date-dialog.component.css']
})
export class EventDateDialogComponent implements OnInit {

    startDate = new FormControl('');
    endDate = new FormControl('');
    minDate = new Date();

    form: FormGroup = this.builder.group({
    startDate: new DatePipe('en').transform(this.startDate.value, 'yyyy/MM/dd'),
    endDate: new DatePipe('en').transform(this.endDate.value, 'yyyy/MM/dd')
  });

  constructor(private builder: FormBuilder, public dialogRef: MatDialogRef<EventDateDialogComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    console.log(data);
    this.startDate = data.startDate;
    this.endDate = data.endDate;
   }

  confirm() {
    console.log("startDate "+this.startDate);
    this.dialogRef.close({ event: 'close', data: this.form});
  }

  close() {
    console.log("startDate "+this.startDate);
    this.dialogRef.close();
  }

  ngOnInit(): void {
      
  }

 
}
