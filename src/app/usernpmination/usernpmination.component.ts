import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {formatDate, getLocaleDateFormat} from '@angular/common';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';

import {UsernominationService} from './usernomination.service';
import {NominateDialogComponent} from './nominate-dialog/nominate-dialog.component';

import {ErrorDialogComponent} from '../shared/error-dialog/error-dialog.component';

@Component({
  selector: 'app-usernpmination',
  templateUrl: './usernpmination.component.html',
  styleUrls: ['./usernpmination.component.scss']
})
export class UsernpminationComponent implements OnInit {
  form: FormGroup;
  minDate = new Date();
  eventDates = [];
  selectedEventDate = '';
  selectedEventSkills = [];
  selectallEventSkills: any;
  eventSkills = [];
  eventNameString: string;
  eventSkillString : string;
  selectedEventName = '';
  eventNames: any;
  selectedEventSlot ='';
  eventSlots = [];
  eventDetails: EventDetailsResult[];
  eventId: string;
  eventstartTime: string;
  eventEndTime: string;
  isAlreadyRegistered: boolean;

   eventNameChange() {
     this.eventDates=[];this.eventSlots=[];this.eventSkills=[];
    this.userNominationService.getSearchCriteriaDetails(this.selectedEventName).subscribe((result: any) => {

        if(result != null) {
          result.filter((element: EventDetailsResult) => {
              if(element.eventName == this.selectedEventName) {
                this.eventDetails = result;
                  console.log(result);
                  this.eventSkillString =  element.eventSkills + '';
                  this.eventSkills = this.eventSkillString.split(",");
                  this.eventSlots.push(element.eventSlot);
                  this.eventDates.push(element.eventDate);
                  this.eventId = element.eventId;
              }
          })
        } else {
          console.log("Result is null");
        }
    })

  }
 
  eventDateChange() {
    this.eventSlots=[];this.eventSkills=[];
    this.eventDetails.filter((element: EventDetailsResult) => {
              if(element.eventName == this.selectedEventName && element.eventDate == this.selectedEventDate) {
                this.eventId = element.eventId;
                  this.eventSkillString =  element.eventSkills + '';
                  console.log(this.eventSkillString);
                  this.eventSkills = this.eventSkillString.split(",");
                  this.eventSlots.push(element.eventSlot);
              }
          })
  }

  eventSlotChange() {
    this.eventSkills=[];
      this.userNominationService.isAlreadyRegistered(this.eventId, 'User').subscribe((data: boolean) => {
        this.isAlreadyRegistered = data;
        console.log(data);

      });

      this.eventDetails.filter((element: EventDetailsResult) => {
              if(element.eventName == this.selectedEventName && element.eventDate == this.selectedEventDate
                && element.eventSlot == this.selectedEventSlot) {
                  console.log(element);
                  this.eventSkillString =  element.eventSkills + '';
                  this.eventSkills = this.eventSkillString.split(",");
                  console.log(this.eventSkillString);
                  this.eventstartTime = element.eventstartTime;
                  this.eventEndTime = element.eventEndTime;
              }
          })
  }
  
  getEvents() {
    var nextDate = new Date();
    nextDate.setDate(nextDate.getDate()+1);
    this.userNominationService.getEventNames(formatDate(nextDate,'yyyy-MM-dd','en')).subscribe(data => {
      if(data != null) {
        console.log(data);
        this.eventNames = (data);
      } else {
        alert("There is no upcoming events!!!!")
      }
    })
  }

  nominate() {
   console.log('nomiate'+this.selectedEventName+' '+this.selectedEventDate+' '+this.selectedEventSlot+' '+this.selectedEventSkills);
   if(this.selectedEventName != '' && this.selectedEventDate != '' && 
        this.selectedEventSlot != '' && this.selectedEventSkills!= []) {
      const eventRegistration: EventRegistration = {
        associateId: 'User',
        eventId: this.eventId,
        slot: this.selectedEventSlot,
        skill: this.selectedEventSkills,
        participated: 'No',
        createdDate: new Date()
      }
      
      if(!this.isAlreadyRegistered) {
        this.userNominationService.registerForEvent(eventRegistration).subscribe(result => {
          if(result != null) {
            console.log("You have successfully nominated");
            this.openDialog();
          }
        });
      } else {
          this.openDialog();
      }
    } else {
      this.openErrorDialog();
    }
  }

  openErrorDialog(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width= '500px';
    dialogConfig.disableClose = true;
    this.dialog.open(ErrorDialogComponent, dialogConfig);
    this.reset();
  }

  openDialog(): void {
   const dialogConfig = new MatDialogConfig();
    dialogConfig.width= '500px';
    dialogConfig.disableClose = true;
     dialogConfig.data = {
       eventName: this.selectedEventName,
       eventSlot: this.selectedEventSlot,
       startTime: this.eventstartTime,
       endTime: this.eventEndTime,
       eventDate: this.selectedEventDate,
       eventSkills: this.selectedEventSkills,
       isAlreadyRegistered: this.isAlreadyRegistered
    };

    this.dialog.open(NominateDialogComponent, dialogConfig);

    this.reset();
  }

  clear() {
    this.reset();
  }

  reset() {
    this.isAlreadyRegistered = false;
      this.router.navigate(['/nominate']);
      this.eventNames = [];
      this.eventDates = [];
      this.eventSlots = [];
      this.eventSkills = [];
      this.getEvents();
      this.selectedEventName = "";
      this.selectedEventDate = "";
      this.selectedEventSkills = [];
      this.selectedEventSlot = "";
  }

  constructor(private userNominationService: UsernominationService, public dialog: MatDialog, private route: ActivatedRoute, public router: Router) {

   }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      console.log(params['eventName']);
      if(params['eventName'] !== undefined) {
         console.log(params['eventName']);
         this.eventNameString = params['eventName']+'';
         this.eventNames = this.eventNameString.split(',');
          this.selectedEventName = params['eventName'];
          this.eventDates.push(params['eventDate']);
          this.selectedEventDate = params['eventDate'];
          this.eventSkillString =  params['eventSkills'] + '';
          this.eventSkills = this.eventSkillString.split(',');
          this.eventSlots.push(params['eventSlot']);
          this.selectedEventSlot = params['eventSlot'];
          this.eventstartTime = params['eventStartTime'];
          this.eventEndTime = params['eventEndTime'];
        } else {
          this.getEvents();
        }
  });   
  }

}

export interface EventDetailsResult {
    eventId: string;
    eventName: string;
    eventDate: string;
    eventSlot: string;
    eventstartTime: string;
    eventEndTime: string;
    eventSkills: string[];
  }

    export interface EventRegistration {
    associateId: string;
    eventId: string;
    slot: string;
    skill: string[];
    participated: string;
    createdDate: Date;
  }
