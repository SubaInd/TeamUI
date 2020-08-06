import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog'; 

@Component({
  selector: 'app-filter-options',
  templateUrl: './filter-options.component.html',
  styleUrls: ['./filter-options.component.css']
})
export class FilterOptionsComponent implements OnInit {

  /* constructor(@Inject(MAT_DIALOG_DATA) public data:any){  
    } */

  ngOnInit(): void {
  }

}
