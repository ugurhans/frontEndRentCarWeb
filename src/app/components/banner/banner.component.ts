import { Component, OnInit } from '@angular/core';
import { CarImage } from 'src/app/model/carImage';
import { CarImageService } from 'src/app/services/car-image.service';



@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  carImages: CarImage[] = [];
  imagesUrls: string[]= [];
  constructor(private carImageService: CarImageService) { }

  ngOnInit(): void {
    this.getAllImages();

  }
  getCarImagesById(carId: number) {
    this.carImageService.getCarImagesById(carId).subscribe((response) => {
      this.carImages = response.data;

    });
  }
  getAllImages() {
    this.carImageService.getAllImages().subscribe((response) => {
      this.carImages = response.data;
      for (let i = 0; i < this.carImages.length; i++) {
        this.imagesUrls[i] = this.carImages[i].imagePath;
      }
    });
  }
}
