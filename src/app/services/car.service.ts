import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../model/car';
import { ListResponseModel } from '../model/listResponseModel';

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
}
