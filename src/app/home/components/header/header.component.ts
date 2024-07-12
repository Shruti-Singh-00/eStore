import { Component } from '@angular/core';
import { faSearch, faUserCircle, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CategoryService } from '../../services/category/category.service';
import { Category } from '../../types/category.type';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  faSearch = faSearch;
  faUser = faUserCircle;
  faCart = faShoppingCart;

  categories: Category[] = [];

  constructor(categoryServices: CategoryService){
    categoryServices.getAllCategories().subscribe(categories => {
      this.categories = categories.filter(category => category.parent_category_id === null
      );
    });
  }
}
