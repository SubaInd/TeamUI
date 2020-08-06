import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators  } from '@angular/forms';
import {EventsInfoService} from '../user/events-info/events-info.service';
import {EventsService} from './events.service';
import { MatDialogConfig} from '@angular/material/dialog';
import {MessageComponent} from '../message/message.component';
import { MatDialog, MatDialogRef } from  '@angular/material/dialog';
import { UploadTemplateDialogComponent } from '../eventsdayuser/submit-mcq/upload-template-dialog/upload-template-dialog.component'
import { JitEvaluator } from '@angular/compiler';
import { Router, ActivatedRoute } from '@angular/router';




@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  displayCreateEvent = false;
  eventCreationForm: FormGroup;
  selectedSkills:any;
  public selected : any = '';
  eventSkills: Array<String>=[];
  selectedAssocs:any;
  assocs:any;
  uploadFile: any;
  emailUrl:String;
  uploadSmeFile:any;
  formdataAssociates:FormData;
  formDataSmes:FormData;
  
  constructor(private formBuilder: FormBuilder,private router: Router,private eventsInfoService : EventsInfoService,private eventsService : EventsService,private  dialog:  MatDialog) { 
    this.selected='';
    this.getSkills();
       this.reset();
  }
  get f() { return this.eventCreationForm.controls}; 

  getSkills() {
    this.eventsInfoService.getSkills().subscribe(data=>{
      for(var i =0;i<data.length;i++){
        console.log(data[i]["skill"]);
        this.eventSkills.push(data[i]["skill"]);
        //this.skills[i] = data[i]["name"];
      }
     this.selectedSkills = this.eventSkills; 
      
    });
  }

  getAssocIds() {
    console.log('Selected Skills',this.selectedSkills)
    this.eventsService.getAssocIds(this.selectedSkills).subscribe((data)=>{
      console.log('Data =>'+data);
      this.assocs = data;
      this.selectedAssocs = this.assocs;
    });
  }

  reset() {
    this.getSkills();
    this.selected = "10";      
  }

  submit() {
    
     
      console.log("inside component");   
      console.log("EventName",this.eventCreationForm.get('eventName').value);
      const postData = {
        eventName: this.eventCreationForm.get('eventName').value,
        eventDate: this.eventCreationForm.get('eventDate').value,
        eventSlot: this.eventCreationForm.get('eventSlot').value,
        eventSkills: this.selectedSkills
        

        
      }

      this.formdataAssociates.append('eventName',this.eventCreationForm.get('eventName').value);
      this.formdataAssociates.append('eventDate',this.eventCreationForm.get('eventDate').value);
      this.formdataAssociates.append('eventSlot',this.eventCreationForm.get('eventSlot').value);
      this.formdataAssociates.append('eventSkills',this.selectedSkills);
      

      console.log(postData);
      this.eventsService.createEvent(this.formdataAssociates).subscribe((data:String)=>{
      console.log("Event Creation Submitted");
      this.router.navigate(["/email"]);
      });
    }
  
    uploadAssociates(evt) {
      const dialogConfig = new MatDialogConfig();
      dialogConfig.width= '500px';
      dialogConfig.disableClose = true;
     
      const dialogRef = this.dialog.open(UploadTemplateDialogComponent, dialogConfig);
    
     
      dialogRef.afterClosed().subscribe(
          result => {
            console.log('Result=> '+result.data);
            this.uploadFile = result.data;
    
            let formdata: FormData = new FormData();
            this.formdataAssociates = formdata;
            this.formdataAssociates.append('uploadFileAssociates', this.uploadFile);
            
          }
      );    
    
      
      console.log('this.uploadFile =>'+this.uploadFile);
      
      this.reset();
    }
    
    uploadSmes(evt) {
      const dialogConfig = new MatDialogConfig();
      dialogConfig.width= '500px';
      dialogConfig.disableClose = true;
     
      const dialogRef = this.dialog.open(UploadTemplateDialogComponent, dialogConfig);
    
     
      dialogRef.afterClosed().subscribe(
          result => {
            console.log('Result=> '+result.data);
            this.uploadSmeFile = result.data;
    
            
            this.formdataAssociates.append('uploadFilesmes', this.uploadSmeFile);
            
          }
      );    
    
      
      console.log('this.uploadFile =>'+this.uploadFile);
      
      this.reset();
    }


  clear() {
    console.log('clear');
    this.reset();
  }
  
  ngOnInit(): void {
    this.eventCreationForm= this.formBuilder.group({eventName: ['', Validators.required],
    eventDate: ['', Validators.required],
    eventSlot: ['', Validators.required],
    });
            this.getSkills();
  }
  displayscreen(): void{
    this.displayCreateEvent = true;
  }

}





export interface EventDetails {
  eventName: string;
  eventDate: string;
  eventSlot: string;
  eventSkills: string[];
  associateList: string[];
  
}
