import { NgModule, Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {DataService} from "../data.service"
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ViewChild } from '@angular/core';


@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  styleUrls: ['./form-component.component.scss']
})
export class FormComponentComponent implements OnInit {

  
  @ViewChild('newCribForm') newCribForm: NgForm;

 
  constructor(public data : DataService, private rout : Router ) { 

 
}

ngOnInit(){ 
  }



  onCribSubmit(data) {

   
   
    this.data.addpost(data);
  }


}
