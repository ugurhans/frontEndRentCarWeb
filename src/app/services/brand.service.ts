import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Brand } from '../model/brand';
import { ListResponseModel } from '../model/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  apiUrl="https://localhost:44337/api/";
  constructor(private httpClient:HttpClient) { }

  getBrands():Observable<ListResponseModel<Brand>>{
    let newPath = this.apiUrl + "brands/getallbrands"
    return this.httpClient.get<ListResponseModel<Brand>>(newPath);
  }
}
