import { Component, OnInit } from '@angular/core';
import {DataService  } from "../data.service"
import { Subscription } from 'rxjs';

import { Crib } from "../cribs";

@Component({
  selector: 'app-list-component',
  templateUrl: './list-component.component.html',
  styleUrls: ['./list-component.component.scss']
})
export class ListComponentComponent implements OnInit {

  cribs: Array<Crib> = [];

  constructor ( public  data_service : DataService) { }

  
  ngOnInit() {
  
    this.data_service.newCribSubject.subscribe(
      data => this.cribs = [data, ...this.cribs]
      
    );
  }

}
   


