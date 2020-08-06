import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Multiplechoicequestion} from'../multiplechoicequestion';
import { environment } from '../../environments/environment';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-practisequestionvalidate',
  templateUrl: './practisequestionvalidate.component.html',
  styleUrls: ['./practisequestionvalidate.component.scss']
})
export class PractisequestionvalidateComponent implements OnInit {
  mcqsurl:string;
  questionstring:string;
  makevisible:boolean =false;
 http:HttpClient;
  mcq :Multiplechoicequestion={
    id:"",
   skills : "",
   taxonomy: "",
   difficultylevel:"",
   classification:"",
   multipleanswers:"",
   topic:"",
   questionsource:"",
   questiontext:"",
   option1:"",
   option1correct:"",
   option2:"",
   option2correct:"",
   option3:"",
   option3correct:"",
   option4:"",
   option4correct:"",
   option5:"",
   option5correct:"",
  
     submitter:"",
     comments:""
  };
  questions:Array<Multiplechoicequestion>=[];
  

  constructor(http: HttpClient,private route: ActivatedRoute,private router: Router) {
    this.http = http;
    this.mcqsurl = environment.smeservicespractisequestionsurl;
    const  headers = new  HttpHeaders().set("Accept", "application/json");
    http.get<any>(this.mcqsurl ,{headers}).subscribe(data => {
      for(var i =0;i<data.length;i++){
       
        this.questions.push(data[i]);

        //this.skills[i] = data[i]["name"];
      }
     //console.log(data[0]["name"]);
      },error =>{console.log("error")});
   }
   
  ngOnInit(): void {
  }
  questionselected(questiontext:string) :void{
  for( var i=0;i<this.questions.length;i++){
   if(this.questions[i].questiontext==questiontext){
       this.mcq = this.questions[i];
       this.makevisible = true;
       break;
   }
  }


  }
  submitMcqReview():void{
    const  headers = new  HttpHeaders().set("Accept", "application/json");
    this.mcqsurl = environment.smeserviceupdatecommentsurl+this.mcq.id+"/"+this.mcq.comments+"/";
  
    this.http.post<any>(this.mcqsurl ,{headers}).subscribe((data) => {var returnUrl = "/sme"
    this.router.navigate([returnUrl]);},(error) =>{var returnUrl = "/sme"
    this.router.navigate([returnUrl]);});
  }

}
