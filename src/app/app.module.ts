import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';
import {MaterialModule, MdNativeDateModule} from '@angular/material';
import 'hammerjs';

import { AppComponent } from './app.component';
import { DetailComponentComponent } from './detail-component/detail-component.component';
import { ListComponentComponent } from './list-component/list-component.component';
import {HolidayServiceService} from './holiday-service.service';

@NgModule({
  declarations: [
    AppComponent,
    DetailComponentComponent,
    ListComponentComponent
  ],
  imports: [
    BrowserModule,HttpModule,MaterialModule,
    MdNativeDateModule,
    RouterModule,
    RouterModule.forRoot([
      {path:'details',component:DetailComponentComponent},
      {path:'list',component:ListComponentComponent},
    ])
  ],
  providers: [HolidayServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
