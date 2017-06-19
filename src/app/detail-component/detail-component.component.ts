import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import {HolidayServiceService} from '../holiday-service.service';

@Component({
  selector: 'detail-component',
  templateUrl: './detail-component.component.html',
  styleUrls: ['./detail-component.component.css']
})
export class DetailComponentComponent implements OnInit {
public reasons=[];
  constructor(public service:HolidayServiceService) { 
    this.service.sendDetails().subscribe((result)=>
    this.reasons=result);
  }

  ngOnInit() {
  }
 routeBack(){
   this.service.getEvent();
 }
}
