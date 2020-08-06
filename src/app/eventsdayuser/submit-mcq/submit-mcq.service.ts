import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { MCQDetails } from './submit-mcq.component';

@Injectable({
  providedIn: 'root'
})
export class SubmitMcqService {

   public getSkills(){
      return this.httpClient.get('http://localhost:8001/qbthonInfo/getDistinctSkills');
  }

   public downloadTemplate(){
      const REQUEST_PARAMS = new HttpParams().set('fileName', 'MCQDetails.xlsx')
      return this.httpClient.get('http://localhost:8003/eventDay/downloadTemplate', {
          params: REQUEST_PARAMS,
          responseType: 'blob'
      });
  }

  public submitMcq(mcqDetails : MCQDetails) {
    console.log('mcqDetails =>' + mcqDetails);
    return this.httpClient.post<MCQDetails>("http://localhost:8003/eventDay/submitMcq", mcqDetails);
  }

  public uploadFile(uploadFile: any) {
    console.log('uploadFile =>' + uploadFile);
    return this.httpClient.post<MCQDetails>("http://localhost:8003/eventDay/uploadMCQFile", uploadFile);
  }

  constructor(private httpClient: HttpClient) { }
}
