import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders  } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class TriggerMailService {

  constructor(private httpClient: HttpClient) { }

  public getAllMailTemplates(){
    //console.log('http://localhost:8001/qbthonInfo/getDistinctAssocIds?skills='+ eventSkills);
    return this.httpClient.get<any>('http://localhost:8005/qbthonEvents-emailservice/getAllTemplates');
}

public getAllEventIds(){
    return this.httpClient.get<any>('http://localhost:8001/qbthonInfo/getAllEvents');
}

public getAllMailIdsofNonNominatedAssociates(eventName:String){
    
    var strurl ="http://localhost:8001/qbthonInfo/getAllNonNominatedAsociatesEmail/"+eventName+"/";
    
    return this.httpClient.get<any>(strurl) ;   

}

 
}
