import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { MatDialogRef, MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { EventDateDialogComponent } from '../user/events-info/event-date-dialog/event-date-dialog.component';


@Injectable()
export class CommonModelService {

  startDate: any;
  endDate: any
  constructor(public dialog: MatDialog) { }
  openDialog(): Observable<any> {
    const dialogRef = this.dialog.open(EventDateDialogComponent, {
      width: '250px',
      data: {
        startDate: this.startDate, endDate: this.endDate,
         }
    });

    return dialogRef.afterClosed();
  }
}