import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders  } from '@angular/common/http';
import {EventDetails} from './events.component';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor(private httpClient: HttpClient) { }

  public getAssocIds(eventSkills:String[]){
    console.log('http://localhost:8001/qbthonInfo/getDistinctAssocIds?skills='+ eventSkills);
    return this.httpClient.get('http://localhost:8001/qbthonInfo/getDistinctAssocIds?skills='+ eventSkills);
}

  public createEvent(postData: any) {
    console.log("service", postData);
    const  headers = new  HttpHeaders().set("Content-type", "multipart/form-data; charset=utf-8");
    return this.httpClient.post("http://localhost:8001/qbthonInfo/createEventDetails", postData,{ responseType: 'text' });
  }
}
