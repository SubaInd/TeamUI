import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {MatMenuModule} from '@angular/material/menu';
import { environment } from '../../environments/environment';
import {TriggerMailService} from '../triggermails/triggermailservice';

@Component({
  selector: 'app-triggermails',
  templateUrl: './triggermails.component.html',
  styleUrls: ['./triggermails.component.scss']
})
export class TriggermailsComponent implements OnInit {

  templates:Array<String>=[];
  selectedtemplate:String;
  eventids:Array<String>=[];
  selectedEventId:String;
  emails:Array<String>=[];
  Associateemails:Array<String> = [];
  isTemplateSelected:boolean = false;
  isEventidSelected:boolean= false;
  constructor(private emailservice:TriggerMailService) {
   this.emailservice.getAllMailTemplates().subscribe(data => {
     for(var i=0;i<data.length;i++){
      this.templates.push(data[i]);
     }
   })

   this.emailservice.getAllEventIds().subscribe(data => {
    for(var i=0;i<data.length;i++){
      this.eventids.push(data[i]);
     }
   })
    
   }

  ngOnInit(): void {
  }

  tempalteSelected(): void{
    this.isTemplateSelected = true;
  }

  eventidSelected():void{
    
    this.isEventidSelected = true;

    if(this.isTemplateSelected ==true){
      if(this.selectedtemplate == "NominationRemainder"){
        this.emailservice.getAllMailIdsofNonNominatedAssociates(this.selectedEventId).subscribe(data=>{
          for(var i=0;i<data.length;i++){
            this.emails.push(data[i]);
           }
        })
      }
    }
  }

  triggerMail():void{

  }

  cancel():void {

  }

}
