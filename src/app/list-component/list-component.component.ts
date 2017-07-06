import { Component, OnInit } from '@angular/core';
import{Http}  from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import { Router} from '@angular/router';
import {HolidayServiceService} from '../holiday-service.service';

@Component({
  selector: 'list-component',
  templateUrl: './list-component.component.html',
  styleUrls: ['./list-component.component.css']
})
export class ListComponentComponent implements OnInit {
 public Holidays=[];
  public det=true;
  public backButton=false;
  constructor(public http:Http,public router:Router,public service:HolidayServiceService) {
     this.http.get('https://holidayapi.com/v1/holidays?key=9a4e3715-f1e1-4294-9e3d-e797900ee920&country=US&year=2016')
                     .map(function (res){
                       this.Holidays=[];
                       let data=JSON.parse(res['_body']);                       
                       let keys= Object.keys(data.holidays);
                       for(var i=0;i<keys.length;i++){
                         let key=keys[i];
                          this.Holidays.push(data.holidays[key]);
                       }                      
                       return this.Holidays;                     
   }).subscribe(res=>{
     this.Holidays=res;
   });
   }

  ngOnInit() {
     this.service.sendEvent().subscribe((result)=>
    this.det=result);
  }
 details(detail){
    this.det=false;    
    this.service.getDetails(detail);        
  }
}
