import { Component } from '@angular/core';
import { Category } from '../../types/category.type';
import { OnDestroy } from '@angular/core';
import { CategoriesStoreItem } from '../../services/category/categories.storeItem';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sidenavigation',
  standalone: true,
  imports: [],
  templateUrl: './sidenavigation.component.html',
  styleUrl: './sidenavigation.component.css'
})
export class SidenavigationComponent implements OnDestroy{
  categories: Category[] = [];
  subscriptions: Subscription = new Subscription();

  constructor(categoryStore: CategoriesStoreItem){
    this.subscriptions.add(
      categoryStore.categories$.subscribe((categories) => {
        this.categories = categories;
      })
    );
  }

  getCategories(parentCategoryId?:number): Category[]{
    return this.categories.filter(
      (category) => parentCategoryId ? category.parent_category_id === parentCategoryId :
        category.parent_category_id === null
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
