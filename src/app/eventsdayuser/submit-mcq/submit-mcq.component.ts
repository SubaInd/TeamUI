import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import { SuccessDialogComponent } from './success-dialog/success-dialog.component';
import { UploadTemplateDialogComponent } from './upload-template-dialog/upload-template-dialog.component';
import { SubmitMcqService } from './submit-mcq.service';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-submit-mcq',
  templateUrl: './submit-mcq.component.html',
  styleUrls: ['./submit-mcq.component.scss']
})
export class SubmitMcqComponent implements OnInit {

  skills : any;
  selectedSkill: string;
  selectedTaxonomy: string;
  selectedDiffLevel: string;
  selectedCategory: string;
  selectedMulAns: string;
  topic: string;
  questionSource: string;
  questionText: string;
  option1: string;
  option2: string;
  option3: string;
  option4: string;
  option5: string;
  selectedCA1: string;
  selectedCA2: string;
  selectedCA3: string;
  selectedCA4: string;
  selectedCA5: string;
  uploadFile: any;
  successMsg: string;
  
  constructor(private submitMcqService : SubmitMcqService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.reset();
  }

  reset() {
    this.submitMcqService.getSkills().subscribe((data)=>{
      console.log('Data =>'+data);
      this.skills = (data);
      this.skills.sort();
      this.selectedSkill = this.skills[0];
    });

    this.selectedTaxonomy = 'Multiple Choice';
    this.selectedDiffLevel = 'Easy';
    this.selectedCategory = 'Analysis';
    this.selectedMulAns = 'Yes';
    this.topic = '';
    this.questionSource = '';
    this.questionText = '';
    this.option1 = ''; this.selectedCA1 = '';
    this.option2 = ''; this.selectedCA2 = '';
    this.option3 = ''; this.selectedCA3 = '';
    this.option4 = ''; this.selectedCA4 = '';
    this.option5 = ''; this.selectedCA5 = '';
  }

  submit() {
    console.log('in submit');
    console.log(this.selectedCA2+' '+this.selectedCA3+''+this.selectedCA4+''+this.selectedCA5+' CA1 '+this.selectedCA1);
    const mcqDetails: MCQDetails = {
        associateId: 'User',
        eventId: '003',
        skill: this.selectedSkill,
        taxonomy: this.selectedTaxonomy,
        difficultyLevel: this.selectedDiffLevel,
        category: this.selectedCategory,
        mutipleAnswer: this.selectedMulAns,
        topic: this.topic,
        questionSource: this.questionSource,
        questionText: this.questionText,
        option1: this.option1,
        correctAns1: this.selectedCA1,
        option2: this.option2,
        correctAns2: this.selectedCA2,
        option3: this.option3,
        correctAns3: this.selectedCA3,
        option4: this.option4,
        correctAns4: this.selectedCA4,
        option5: this.option5,
        correctAns5: this.selectedCA5,
      }

      this.submitMcqService.submitMcq(mcqDetails).subscribe((data) => {
        console.log("MCQ submitted!!!!!");
        this.successMsg = 'Congratulations!! You have successfully submitted MCQ. Your MCQ will be reviewed and feedback will be provided shortly.'
        this.openSuccessDialog();
      })
  }

   openSuccessDialog(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width= '500px';
    dialogConfig.disableClose = true;
    dialogConfig.data = {
      message: this.successMsg
    }
    this.dialog.open(SuccessDialogComponent, dialogConfig);
    this.reset();
  }

  clear() {
    console.log('in clear');
    this.reset();
  }

  downloadTemplate() {
    console.log('in downloadTemplate');
    this.submitMcqService.downloadTemplate().subscribe(data => {
      console.log(data);
      saveAs(new Blob([data], {type : 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'}), 'MCQDetails.xlsx');
    });
  }

  uploadTemplate(evt) {
    console.log('in uploadTemplate');
    this.openUploadTemplateDialog();
  }

  openUploadTemplateDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width= '500px';
    dialogConfig.disableClose = true;
   
    const dialogRef = this.dialog.open(UploadTemplateDialogComponent, dialogConfig);

   
    dialogRef.afterClosed().subscribe(
        result => {
          console.log('Result=> '+result.data);
          this.uploadFile = result.data;

          let formdata: FormData = new FormData();
 
          formdata.append('uploadFile', this.uploadFile);
          this.submitMcqService.uploadFile(formdata).subscribe((data) => {
            this.successMsg = 'Congratulations!! You have successfully submitted MCQs. Your MCQs will be reviewed and feedback will be provided shortly.';
            this.openSuccessDialog();
            console.log("File uloaded");
          }, error => {
            console.log("Some error occured");
          });
        }
    );    

    
    console.log('this.uploadFile =>'+this.uploadFile);
    
    this.reset();
  }
}

export interface MCQDetails {
  associateId: string;
  eventId: string;
  skill: string;
  taxonomy: string;
  topic: string;
  difficultyLevel: string;
  category: string;
  mutipleAnswer: string;
  questionSource: string;
  questionText: string;
  option1: string;
  correctAns1: string;
  option2: string;
  correctAns2: string;
  option3: string;
  correctAns3: string;
  option4: string;
  correctAns4: string;
  option5: string;
  correctAns5: string;
}
