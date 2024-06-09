import { Component } from '@angular/core';
import { faSearch, faUserCircle, faHeart, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

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
  faHeart = faHeart;
  faCart = faShoppingCart;
}
