import { Component } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { Category } from '../../types/category.type';

@Component({
  selector: 'app-navigationbar',
  standalone: true,
  imports: [],
  templateUrl: './navigationbar.component.html',
  styleUrl: './navigationbar.component.css'
})
export class NavigationbarComponent {
  categories: Category[] = [];

  constructor(categoryServices: CategoryService){
    categoryServices.getAllCategories().subscribe(categories => {
      this.categories = categories.filter(category => category.parent_category_id === null
      );
    });
  }
}
