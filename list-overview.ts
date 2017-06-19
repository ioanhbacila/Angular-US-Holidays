import {Component} from '@angular/core';
import{Http}  from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import { Router} from '@angular/router';
import {completeService} from './complete.service';

@Component({
  selector: 'list-overview-example',
  templateUrl: './list-overview-example.html',
})
export class ListOverviewExample {
  public Holidays=[];
  public det=true;
  public backButton=false;
  constructor(public http:Http,public router:Router,public service:completeService){
    this.http.get('https://holidayapi.com/v1/holidays?key=214a28dd-0ef0-4acc-b70e-40d15e96e15b&country=US&year=2015')
                     .map(function (res){
                       this.Holidays=[];
                       let data=JSON.parse(res._body);
                       this.Holidays.push( Object.values(data.holidays));
                       return this.Holidays[0];
   }).subscribe(res=>{
     this.Holidays=res;
   });
  }
  details(detail){
    this.det=false;
    this.backButton=true;
    this.service.getDetails(detail);
    //this.router.navigate(['/details']);
    console.log(detail);
  }
  gotoBack(){
    this.backButton=false;
  }
}

