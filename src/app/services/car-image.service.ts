import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarImage } from '../model/carImage';
import { ListResponseModel } from '../model/listResponseModel';


@Injectable({
  providedIn: 'root'
})
export class CarImageService {
 
  apiUrl="https://localhost:44337/api/"

  constructor(private httpClient:HttpClient) { }

  getCarImagesById(carId:number):Observable<ListResponseModel<CarImage>>{
    let newPath=this.apiUrl+"carImages/getImagesById?id=" + carId;
    return this.httpClient.get<ListResponseModel<CarImage>>(newPath)
  }
  getAllImages():Observable<ListResponseModel<CarImage>>{
    let newPath=this.apiUrl+"carImages/getall";
    return this.httpClient.get<ListResponseModel<CarImage>>(newPath)
  }
}