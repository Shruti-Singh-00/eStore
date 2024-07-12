import { Component, Inject, OnDestroy, OnInit, PLATFORM_ID } from '@angular/core';
import { ProductsService } from '../../services/products/products.service';
import { Product } from '../../types/products.type';
import { RatingsComponent } from '../../../shared/components/ratings/ratings.component';
import { CommonModule } from '@angular/common';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { ProductStoreItem } from '../../services/products/products.storeItem';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [RatingsComponent, CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
  providers: [ProductsService],
})
export class ProductsComponent implements OnDestroy{
  products: Product[] = [];
  subscriptions: Subscription = new Subscription();
  isBrowser: any;
  isServer: any;

  constructor(
    @Inject(PLATFORM_ID) private platformId: any, private productStore: ProductStoreItem
  ){
    this.isBrowser = isPlatformBrowser(platformId);
    this.isServer = isPlatformServer(platformId);
    this.subscriptions.add(
      productStore.products$.subscribe((products) => {
        this.products = products;
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
  
}