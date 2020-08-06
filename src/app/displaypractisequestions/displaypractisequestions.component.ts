import { Observable, Subject } from 'rxjs';
import { WebsocketService } from '../websocket.service';

import { Component, OnInit } from '@angular/core';
import {map} from 'rxjs/operators';


@Component({
  selector: 'app-displaypractisequestions',
  templateUrl: './displaypractisequestions.component.html',
  styleUrls: ['./displaypractisequestions.component.scss']
})



export class DisplaypractisequestionsComponent implements OnInit {
   CHAT_URL = "ws://localhost:8072/app/getQuestions";
   message: string;
  ngOnInit(): void {
  }
  public messages: Subject<string>;

  constructor(wsService: WebsocketService) {
      this.messages = <Subject<string>>wsService
          .connect(this.CHAT_URL).pipe(
          map((response: MessageEvent): string => {
              let data = response.data;
              console.log(data);
              return data;
          }));
  }
  

}
