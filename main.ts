import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MaterialModule, MdNativeDateModule} from '@angular/material';
import {ListOverviewExample} from './list-overview-example';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';
import {detailedHolidays} from './detailscomponent';
import {mainDates} from './maincomponent';
import {RouterModule} from '@angular/router';
import {APP_BASE_HREF} from '@angular/common';
import {completeService} from './complete.service';

@NgModule({

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    RouterModule,
    MaterialModule,
    MdNativeDateModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path:"details",name: 'details',component:detailedHolidays},
      {path:"list",name: 'list',component:ListOverviewExample},
    ])
  ],

  declarations: [ListOverviewExample,detailedHolidays,mainDates],
  bootstrap: [mainDates],
  providers: [{provide: APP_BASE_HREF, useValue : '/' },completeService]
})
export class PlunkerAppModule {}

platformBrowserDynamic().bootstrapModule(PlunkerAppModule);


/**  Copyright 2017 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */