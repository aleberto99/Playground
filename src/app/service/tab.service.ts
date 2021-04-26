import { tabModel } from './../interface/tabModel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TabService {
  constructor(private http: HttpClient) { }
  dataTab1(){
    return this
            .http
            .get('assets/ajax/tab1.json');
  }
  dataTab2(){
    return this
            .http
            .get('assets/ajax/tab2.json');
  }
  dataTab3(){
    return this
            .http
            .get('assets/ajax/tab3.json');
  }



}
