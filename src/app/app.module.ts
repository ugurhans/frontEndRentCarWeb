import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { CarComponent } from './components/car/car.component';
import { BrandComponent } from './components/brand/brand.component';
import { ColorComponent } from './components/color/color.component';
import { BannerComponent } from './components/banner/banner.component';
import { FilterNavComponent } from './components/filter-nav/filter-nav.component';
import { ProductAddComponent } from './components/product-add/product-add.component';
import {FormsModule,ReactiveFormsModule} from "@angular/forms"




@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CarComponent,
    BrandComponent,
    ColorComponent,
    BannerComponent,
    FilterNavComponent,
    ProductAddComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
