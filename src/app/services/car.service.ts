import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../model/car';
import { CarDto } from '../model/car-dto';
import { CarDtoMain } from '../model/car-dto-main';
import { ListResponseModel } from '../model/listResponseModel';
import { SingleResponseModel } from '../model/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl="https://localhost:44337/api/";
  constructor(private httpClient:HttpClient) { }

  getCars():Observable<ListResponseModel<Car>>{
    let newPath = this.apiUrl + "cars/getall"
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  getCarDetails(){
    let newPath=this.apiUrl +"cars/carDetails"
    return this.httpClient.get<ListResponseModel<CarDtoMain>>(newPath);
  }
  
 getCarByBrandId(brandId:number){
  let newPath = this.apiUrl + "cars/carsDetailsByBrandId?brandId=" + brandId;
  return this.httpClient.get<ListResponseModel<CarDtoMain>>(newPath);
 }

 getFilter(brandID:number ,colorId:number){
  let newPath = this.apiUrl +'cars/carsDetailsColorIdAndBrandId?brandID='+brandID+'&colorId='+colorId;
  return this.httpClient.get<ListResponseModel<CarDtoMain>>(newPath);
 }

}
