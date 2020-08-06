import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule }    from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { GoogleChartsModule } from 'angular-google-charts';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminpageComponent } from './adminpage/adminpage.component';
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatIconModule} from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgxsWebsocketPluginModule } from '@ngxs/websocket-plugin'
import { NgxsModule } from '@ngxs/store'
import {MatMenuModule} from '@angular/material/menu';
import { MatTabsModule } from '@angular/material/tabs';

import {MatDialogModule, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatPaginatorModule, MatPaginator} from '@angular/material/paginator';
import {MatDatepickerModule, MatDatepickerContent, MatDatepickerToggle} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import { SelectCheckAllComponent } from './shared/select-check-all/select-check-all.component';
import {MatInputModule} from '@angular/material/input';
import { EventsComponent } from './events/events.component';
import { EventdayadminComponent } from './eventdayadmin/eventdayadmin.component';
import { TriggermailsComponent } from './triggermails/triggermails.component';
import { ReportsComponent } from './reports/reports.component';
import { UserComponent } from './user/user.component';
import { SmeComponent } from './sme/sme.component';
import {KafkaState} from './kafka-state';
import { EventsdayuserComponent } from './eventsdayuser/eventsdayuser.component';
import { UsernpminationComponent } from './usernpmination/usernpmination.component';
import { EventsdaysmeComponent } from './eventsdaysme/eventsdaysme.component';
import { PractisemcqComponent } from './practisemcq/practisemcq.component';
import { DisplaypractisequestionsComponent } from './displaypractisequestions/displaypractisequestions.component';
import { MessageComponent } from './message/message.component';
import { EventDateDialogComponent } from './user/events-info/event-date-dialog/event-date-dialog.component';
import { EventsInfoComponent } from './user/events-info/events-info.component';
import {MatTableModule} from '@angular/material/table';
import { PractisequestionvalidateComponent } from './practisequestionvalidate/practisequestionvalidate.component';



import { MatRadioModule } from '@angular/material/radio';

import { FilterOptionsComponent } from './shared/filter-options/filter-options.component';

import { UniqueFilterPipe } from './shared/unique-filter.pipe';
import { NominateDialogComponent } from './usernpmination/nominate-dialog/nominate-dialog.component';
import { ErrorDialogComponent } from './shared/error-dialog/error-dialog.component';
import { SubmitMcqComponent } from './eventsdayuser/submit-mcq/submit-mcq.component';
import { SuccessDialogComponent } from './eventsdayuser/submit-mcq/success-dialog/success-dialog.component';
import { UploadTemplateDialogComponent } from './eventsdayuser/submit-mcq/upload-template-dialog/upload-template-dialog.component';
import { CreateemailtemplatesComponent } from './createemailtemplates/createemailtemplates.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminpageComponent,
    EventsComponent,
    EventdayadminComponent,
    TriggermailsComponent,
    ReportsComponent,
    UserComponent,
    SmeComponent,
    EventsdayuserComponent,
    UsernpminationComponent,
    EventsdaysmeComponent,
    PractisemcqComponent,
    MessageComponent,
    EventsInfoComponent,
    DisplaypractisequestionsComponent,
    SelectCheckAllComponent,
    EventDateDialogComponent,
    PractisequestionvalidateComponent,
    FilterOptionsComponent,
    SelectCheckAllComponent,
    EventDateDialogComponent,
    UniqueFilterPipe,
    NominateDialogComponent,
    ErrorDialogComponent,
    SubmitMcqComponent,
    SuccessDialogComponent,
    UploadTemplateDialogComponent,
    CreateemailtemplatesComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatIconModule,
    FormsModule,
    FlexLayoutModule,
    HttpClientModule,
    GoogleChartsModule.forRoot(),
    BrowserAnimationsModule,
    MatToolbarModule,
    MatTabsModule,
    NgxsModule.forRoot([
      KafkaState
    ]),
    NgxsWebsocketPluginModule.forRoot({
      url: 'ws://localhost:8072/app/getQuestions'
    }),
    MatToolbarModule,
    MatTabsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSelectModule,
    MatGridListModule,
    HttpClientModule,
    MatCheckboxModule,
    MatPaginatorModule,
    MatTableModule,
    MatMenuModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatListModule,
    MatButtonModule,
  
    MatRadioModule
    
  ],
  providers: [ { provide: MatDialogRef, useValue: {} },
    { provide: MAT_DIALOG_DATA, useValue: [] }],
  bootstrap: [AppComponent]
})
export class AppModule { }
