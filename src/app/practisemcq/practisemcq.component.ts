import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Multiplechoicequestion} from'../multiplechoicequestion';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-practisemcq',
  templateUrl: './practisemcq.component.html',
  styleUrls: ['./practisemcq.component.scss']
})
export class PractisemcqComponent implements OnInit {
 url:string;
 token:string;
 http:HttpClient;
 showcomments:boolean = false;
 istaxonomyselected:boolean =false;
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
 skills:Array<String>=[];
  constructor(http: HttpClient) {
    this.url = environment.skillsurl;
    this.http = http;
    this.token = "Bearer "+localStorage.getItem('authtoken');
  console.log(this.token);
    const  headers = new  HttpHeaders().set("Accept", "application/json").set("Authorization",this.token);
    http.get<any>(this.url ,{headers}).subscribe(data => {
      for(var i =0;i<data.length;i++){
        console.log(data[i]["name"]);
        this.skills.push(data[i]["name"]);
        //this.skills[i] = data[i]["name"];
      }
     //console.log(data[0]["name"]);
      },error =>{console.log("error")});
    
  
   }

  ngOnInit(): void {
  }
  onTaxonomySelected(options:string): void{
    if(options == "MultipleChoice" ){
      this.istaxonomyselected=  true;
      
    }
    else{
      this.istaxonomyselected=  false;
    }
  }

  clear() : void{
    this.mcq.skills = "",
    this.mcq.taxonomy ="";
    this.mcq.topic="";
    this.mcq.questiontext="";
    this.mcq.questionsource="";
    this.mcq.multipleanswers="";
    this.mcq.classification="";
    this.mcq.difficultylevel="";
    this.mcq.option1="";
    this.mcq.option1correct="";
    this.mcq.option2="";
    this.mcq.option2correct="";
    this.mcq.option3="";
    this.mcq.option3correct="";
    this.mcq.option4="";
    this.mcq.option4correct="";
    this.mcq.option5="";
    this.mcq.option5correct="";
    
  }

  submitMcq() : void {
    const  headers = new  HttpHeaders().set("Accept", "application/json");
    this.url = environment.practiseMcqURL;
    
   this.mcq.submitter = localStorage.getItem('curruser');
   this.mcq.id = this.mcq.submitter+new Date();
   this.mcq.comments="";
    this.http.post<any>(this.url,this.mcq,{headers}).subscribe(data => {
     
     console.log("question submitted");
      },error =>{console.log("error")});
    


  }
  cancel(): void {

  }
  Refresh():void {
    this.url = environment.getsmecommentspractisequestionsurl+this.mcq.id;
    const  headers = new  HttpHeaders().set("Accept", "application/json");
    this.http.get<any>(this.url,{headers}).subscribe(data=>{
      this.mcq.comments = data;
    })
    
    this.showcomments= true;


  }

}
