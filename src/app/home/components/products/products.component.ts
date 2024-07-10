import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { ProductsService } from './products.service';
import { ProductListItem } from './products.type';
import { RatingsComponent } from '../../../shared/components/ratings/ratings.component';
import { CommonModule } from '@angular/common';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [RatingsComponent, CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
  providers: [ProductsService],
})
export class ProductsComponent implements OnInit{
  products: ProductListItem[] = [];

  isBrowser: any;
  isServer: any;

  constructor(
    @Inject(PLATFORM_ID) private platformId: any, private productService: ProductsService
  ){
    this.isBrowser = isPlatformBrowser(platformId);
    this.isServer = isPlatformServer(platformId);
  }

  ngOnInit(): void {
    if(this.isBrowser){
      console.log('App loaded on browser!');
      this.products = this.productService.getProductsList();
    }
    else if(this.isServer){
      console.log('App loaded on server!');
    }
    else{
      console.log('App loaded!');
    }

  }
  
}
