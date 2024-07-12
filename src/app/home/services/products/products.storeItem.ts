import { StoreItem } from "../../../shared/storeItem";
import { Product } from "../../types/products.type";
import { ProductsService } from "./products.service";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable()
export class ProductStoreItem extends StoreItem<Product[]>{
    constructor(private productsService: ProductsService){
        super([]);
    }

    async loadProducts(){
        this.productsService.getAllProducts().subscribe((products) => {
            this.setValue(products);
        });
    }

    get products$(): Observable<Product[]>{
        return this.value$;
    }
}