import {Component} from '@angular/core';
import{Http}  from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import {ROUTER_DIRECTIVES} from '@angular/router';

@Component({
  selector: 'main-dates',
  templateUrl: './maincomponent.html',
  directives: [ROUTER_DIRECTIVES]
})
export class mainDates {
  constructor(){
    
  }
}