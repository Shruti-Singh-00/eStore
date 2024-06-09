import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderComponent } from './components/header/header.component';
import { NavigationbarComponent } from './components/navigationbar/navigationbar.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, NavigationbarComponent, FontAwesomeModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
