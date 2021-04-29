import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,FormControl,Validators, Form} from "@angular/forms"
@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  carAddForm!:FormGroup;
  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.createCarAddForm();
  }

  createCarAddForm(){
    this.carAddForm = this.formBuilder.group({
      carName:["",Validators.required],
      brandId:["",Validators.required],
      colorId:["",Validators.required]
    })
  }

}
