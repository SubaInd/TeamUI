import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {EventRegistration} from './usernpmination.component'

@Injectable({
  providedIn: 'root'
})
export class UsernominationService {

  constructor(private httpClient: HttpClient) { }

  public getEventNames(eventDate: any) {
    return this.httpClient.get("http://localhost:8002/user/nominate/getUpcomingEventNames?date="+eventDate);
  }

  public getSearchCriteriaDetails(...args) {
    console.log("http://localhost:8002/user/nominate?eventName="+args[0]+"&eventDate="+args[1]+"&eventSlot="+args[2]+"&eventSkills="+args[3]);
      return this.httpClient.get("http://localhost:8002/user/nominate/getEventDetailsByEventName?eventName="+args[0]
        +"&eventDate="+args[1]+"&eventSlot="+args[2]+"&eventSkills="+args[3]);
  }

  public registerForEvent(eventRegistration: EventRegistration) {
    console.log('register' + eventRegistration);
    return this.httpClient.post<EventRegistration>("http://localhost:8002/user/nominate/registerForEvent", eventRegistration);
  }

  public isAlreadyRegistered(eventId: any, associateId: any) {
    console.log("http://localhost:8002/user/nominate/isAlreadyRegistered?eventId="+eventId+"&associateId="+associateId);
    return this.httpClient.get("http://localhost:8002/user/nominate/isAlreadyRegistered?eventId="+eventId+"&associateId="+associateId);
  }
}
