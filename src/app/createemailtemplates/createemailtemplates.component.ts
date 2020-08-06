import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { FormControl, FormBuilder, FormGroup, Validators  } from '@angular/forms';

@Component({
  selector: 'app-createemailtemplates',
  templateUrl: './createemailtemplates.component.html',
  styleUrls: ['./createemailtemplates.component.scss']
})
export class CreateemailtemplatesComponent implements OnInit {

  from:String;
  templatetype:String;
  subject:String;
  body:Array<File>=[];
  attachments: Array<File>=[];
  filesToattach: Array<File> = [];
  formdatatempaltes:FormData;
  templatecreateform: FormGroup;
  httpclient:HttpClient;
  constructor(http: HttpClient,private formBuilder: FormBuilder) {
     this.httpclient = http;

   }


   uploadattachment(fileInput :any){
    this.filesToattach = <Array<File>>fileInput.target.files;
    console.log("total files till now"+this.attachments.length);
    for(var i=0;i<this.filesToattach.length;i++){
      this.attachments.push(this.filesToattach[i]);
    }
    
    
   }

   get f() { return this.templatecreateform.controls}; 

   uploadbody(fileInput: any){
    this.body = <Array<File>>fileInput.target.files;

    this.attachments.push(this.body[0]);
   }

   saveTemplate(){
    let formdata: FormData = new FormData();
    this.formdatatempaltes = formdata;

    this.formdatatempaltes.append('emailType',this.templatecreateform.get('templatetype').value);
    this.formdatatempaltes.append('subject',this.templatecreateform.get('subject').value);
    this.formdatatempaltes.append('from',this.templatecreateform.get('from').value);
    for(var i =0;i<this.attachments.length;i++){
    console.log(this.attachments[i].name);
      this.formdatatempaltes.append('attachments',this.attachments[i]);

   }
   const  headers = new  HttpHeaders().set("Content-type", "multipart/form-data; charset=utf-8");
    return this.httpclient.post("http://localhost:8005/qbthonEvents-emailservice/createTemplate/", this.formdatatempaltes,{ responseType: 'text' }).subscribe(data =>{
      console.log("tempalte saved successfuly");
    });
  }
  ngOnInit(): void {
    this.templatecreateform= this.formBuilder.group({templatetype: ['', Validators.required],
    subject: ['', Validators.required],
    from: ['', Validators.required],
    })
  }

}
