import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class HolidayServiceService {

  private subject:Subject <any>=new Subject<any>();
  private event:Subject <any>=new Subject<any>();
  constructor() { }
getDetails(msg:any){   
    this.subject.next(msg); 
  }
  getEvent(){
    this.event.next("true");
  }
  sendEvent(){
    return this.event.asObservable();
  }
  sendDetails():Observable<any>{
    return this.subject.asObservable();
  }
}
