import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/model/brand';
import { Color } from 'src/app/model/color';
import { BrandService } from 'src/app/services/brand.service';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-filter-nav',
  templateUrl: './filter-nav.component.html',
  styleUrls: ['./filter-nav.component.css']
})
export class FilterNavComponent implements OnInit {
  colors:Color[]=[];
  brands:Brand[]=[];
  currentBrand!: Brand;
  currentColor!:Color;
  dataLoadedColor = false;
  dataLoadedBrand = false;
  constructor(private brandService: BrandService,
    private colorService: ColorService) { }

  ngOnInit(): void {
    this.getBrands();
    this.getColors();
  }

  getColors(){
    this.colorService.getColors().subscribe(response=>{
      this.colors=response.data;
      this.dataLoadedColor = true;
    })
  }
  getBrands(){
    this.brandService.getBrands().subscribe(response=>{
      this.brands = response.data;
      this.dataLoadedBrand = true;
    })
  }
  setCurrentBrand(brand:Brand){
    this.currentBrand = brand;
    console.log(brand.brandID)
 }

  getCurrentBrandClass(brand:Brand){
    if (brand==this.currentBrand) {
      return "table-group-item active"
    }
    else{
      return "list-group-item";
    }
  }
  setCurrentColor(color:Color){
    this.currentColor = color;
    console.log(color.colorId)

 }
 getCurrentColorClass(color:Color){
  if (color==this.currentColor) {
    return "list-group-item active"
  }
  else{
    return "list-group-item";
  }
}
}
