import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { NgForm } from '@angular/forms';
import { HttpClient } from "@angular/common/http";

Injectable({
  providedIn: 'root'
})
export class DataService {

  public newCribSubject  = new Subject<any>();

  constructor(){}


  addpost(data) {
    this.newCribSubject.next(data);
  }
  
  



}