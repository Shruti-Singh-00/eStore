import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderComponent } from './components/header/header.component';
import { NavigationbarComponent } from './components/navigationbar/navigationbar.component';
import { SidenavigationComponent } from './components/sidenavigation/sidenavigation.component';
import { ProductsComponent } from './components/products/products.component';
import { RatingsComponent } from '../shared/components/ratings/ratings.component';
import { HttpClientModule } from '@angular/common/http';
import { CategoriesStoreItem } from './services/categories.storeItem';
import { CategoryService } from './services/category.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, NavigationbarComponent, FontAwesomeModule, SidenavigationComponent, ProductsComponent, RatingsComponent, HttpClientModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  providers: [CategoriesStoreItem, CategoryService]
})
export class HomeComponent {
  constructor(private categoriesStoreItems: CategoriesStoreItem){
    this.categoriesStoreItems.loadCategories();
  }
}
