import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit {
reportType:String;
http:HttpClient;
url:string;
chartdata:any;
columnNames:any[];
charttype:string="";;

options = {    
}
 token:string;

  constructor(http: HttpClient) {
    this.http = http;
   }

  ngOnInit(): void {
  }

  populateChart(){
    this.url = environment.reportsurl;
    this.charttype ="PieChart";
    var jsonstringified:string;
    this.token = "Bearer "+localStorage.getItem('authtoken');
  console.log(this.token);
    const  headers = new  HttpHeaders().set("Accept", "application/json").set("Authorization",this.token);
    this.http.get<any>(this.url ,{headers}).subscribe(data => {
      console.log(data);
      jsonstringified=JSON.stringify(data);
      this.chartdata=jsonstringified;
      
      
      this.columnNames = ['Events', 'TotalApprvedQuestions'];
      
     //console.log(data[0]["name"]);
      },error =>{console.log("error")});
    

  }

}
