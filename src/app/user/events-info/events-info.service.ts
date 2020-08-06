import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {EventDetails} from '../../events/events.component';

@Injectable({
  providedIn: 'root'
})
export class EventsInfoService {

  constructor(private httpClient: HttpClient) { }

   public getSkills(){
      return this.httpClient.get<any>(`http://localhost:8001/qbthonInfo/getDistinctSkills`);
  }

  public getAssocIds(eventSkills:String[]){
    console.log('http://localhost:8001/qbthonInfo/getDistinctAssocIds?skills='+ eventSkills);
    return this.httpClient.get('http://localhost:8001/qbthonInfo/getDistinctAssocIds?skills='+ eventSkills);
}

  public getEventInfo(eventDate:any, eventSkills:any, eventStartDate: any, eventEndDate:any) {
    console.log('http://localhost:8001/qbthonInfo/getQBThonInfoDetails?days='+ eventDate 
          +'&skills='+ eventSkills+'&eventStartDate='+eventStartDate+'&eventEndDate='+eventEndDate);
    return this.httpClient.get('http://localhost:8001/qbthonInfo/getQBThonInfoDetails?days='+ eventDate 
          +'&skills='+ eventSkills+'&eventStartDate='+eventStartDate+'&eventEndDate='+eventEndDate);
  }

 /* public createEvent(eventName:any, eventDate: any, eventSlot: any, selectedSkills:any, selectedAssocs:any) {
    console.log('http://localhost:8001/qbthonInfo/createEventDetails?evntName='+ eventName + '&evntDat' + eventDate
          + '&evntSlot='+ eventSlot + '&skills='+ selectedSkills +'&assocs='+ selectedAssocs);
    return this.httpClient.get('http://localhost:8001/qbthonInfo/createEventDetails?evntName='+ eventName + '&evntDat' + eventDate 
          + '&evntSlot='+ eventSlot + '&skills='+ selectedSkills +'&assocs='+ selectedAssocs);
  }*/

  public createEvent(postData: EventDetails) {
    console.log("service", postData);
    return this.httpClient.post<EventDetails>("http://localhost:8001/qbthonInfo/createEventDetails", postData);
  }


}
