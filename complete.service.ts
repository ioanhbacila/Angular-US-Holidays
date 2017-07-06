import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';
@Injectable()
export class completeService {
  private subject:Subject <any>=new Subject<any>();
  constructor() { } 
  getDetails(msg:any){
   console.log(msg);
    this.subject.next(msg); 
  }
  sendDetails():Observable<any>{
    return this.subject.asObservable();
  }
}