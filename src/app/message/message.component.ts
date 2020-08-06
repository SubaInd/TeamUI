import { Component, Inject, Injectable, OnInit } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA, MatDialog} from  '@angular/material/dialog';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  successMsg:string;

  constructor(private  dialogRef:  MatDialogRef<MessageComponent>, @Inject(MAT_DIALOG_DATA) public  data:  any) { 
    this.successMsg=data.message;
    console.log(data);
  }
public  closeMe() {
        this.dialogRef.close();
    }
  ngOnInit(): void {
  }

}
