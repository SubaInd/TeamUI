import { Component, OnInit, ViewChild } from '@angular/core';
import {EventsInfoService} from './events-info.service';
import {FormControl, FormGroup} from '@angular/forms';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {EventDateDialogComponent} from './event-date-dialog/event-date-dialog.component';
import {formatDate} from '@angular/common';

@Component({
  selector: 'app-events-info',
  templateUrl: './events-info.component.html',
  styleUrls: ['./events-info.component.scss']
})
export class EventsInfoComponent implements OnInit {
  form: FormGroup;
  selectedSkills:any;
  public selected : any = '';
  skills: any;
  eventInfo: any;
  searchGrid: boolean = false;

  eventStartDate: any = '';
  eventEndDate: any = '';
  dialogValue: string

  displayedColumns: string[]; 
  dataSource = new MatTableDataSource<EventsInfo>();
  minDate= new Date();

  constructor(private eventsInfoService : EventsInfoService, public dialog: MatDialog) {
    this.selected='';
    this.getSkills();
       this.reset();
  }

  openDialog(): void {
    console.log(this.eventStartDate);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width= '500px';
    dialogConfig.disableClose = true;
     dialogConfig.data = {
       startDate:this.eventStartDate != "" ? formatDate(this.eventStartDate,'yyyy-MM-dd','en') : "",
       endDate: this.eventEndDate = "" ? formatDate(this.eventEndDate,'yyyy-MM-dd','en') : ""
    };


    const dialogRef = this.dialog.open(EventDateDialogComponent, dialogConfig);

   
    dialogRef.afterClosed().subscribe(
        result => {
          this.eventStartDate = formatDate(result.data.value.startDate,'yyyy-MM-dd','en');
          this.eventEndDate = formatDate(result.data.value.endDate,'yyyy-MM-dd','en');
        }
    );    
  }


   getSkills() {
    this.eventsInfoService.getSkills().subscribe((data)=>{
      console.log('Data =>'+data);
      this.skills = data;
      this.selectedSkills = this.skills;
    });
  }

  reset() {
    this.getSkills();
    this.selected = "10";
    this.eventStartDate = "";
    this.eventEndDate = "";
    this.submit(this.selected, '', '', '');    
  }

  submit(eventDate, eventSkills, eventStartDate, eventEndDate) {
    console.log(eventSkills);
     this.eventsInfoService.getEventInfo(eventDate, eventSkills, eventStartDate, eventEndDate).subscribe((data)=>{
      console.log(data);
      this.eventInfo = data;
      if(typeof data !== undefined && data != null) {
        console.log(this.searchGrid);
        this.searchGrid = true;
          this.displayedColumns = ['eventName', 'eventDate', 'eventSlot', 'eventstartTime', 'eventSkills', 'action'];
          this. dataSource = new MatTableDataSource<EventsInfo>(this.eventInfo);
      }
    },
    error => {
      console.log(error);
    });

  }

  clear() {
    console.log('clear');
    this.reset();
  }

  ngOnInit(): void {
    this.getSkills();
  }
 
}
  export interface EventsInfo {
    eventId: string;
    eventName: string;
    eventDate: string;
    eventSlot: string;
    eventstartTime: string;
    eventEndTime: string;
    eventSkills: string[];
    smeList: string[];
    associateList: string[];
    totalNoOfMCQs: Number;
    totalNoOfSkillsCovered: Number;
    voucherWinners: string[];
  }

