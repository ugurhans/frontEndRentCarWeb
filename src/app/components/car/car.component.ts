import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/model/car';
import { CarDto } from 'src/app/model/car-dto';
import { CarDtoMain } from 'src/app/model/car-dto-main';
import { CarService } from 'src/app/services/car.service';


@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  cars: Car[] = [];
  carsDtoMain: CarDtoMain[] = []
  constructor(private carService: CarService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['brandId']) {
        this.getCarByBrandId(params['brandId']);
      }  else if (params['colorId']) {
        this.getCarByColorId(params['colorId']);
      }  else if(params["brandID"] && params["colorId"]){
        this.getCarByBrandIdAndColorId(params["brandID"],params["colorId"]);
      }
      else {
        this.getCarsDetail();
      }
    });
  }

  getCars() {
    this.carService.getCars().subscribe(response => {
      this.cars = response.data;
    })
  }

  getCarsDetail() {
    this.carService.getCarDetails().subscribe(response => {
      this.carsDtoMain = response.data;
    })
  }
  getCarByColorId(colorId: number) {
    this.carService.getCarByBrandId(colorId).subscribe((response) => {
      this.carsDtoMain = response.data;

    });
  }
  getCarByBrandId(brandId: number) {
    this.carService.getCarByBrandId(brandId).subscribe((response) => {
      this.carsDtoMain = response.data;

    });
  }
  getCarByBrandIdAndColorId(brandID: number, colorId: number) {
    this.carService.getFilter(brandID, colorId).subscribe((response) => {
      this.carsDtoMain = response.data;
    });
  }
}
