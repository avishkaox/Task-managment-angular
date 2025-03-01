import { Component } from '@angular/core';
import { HeaderComponent } from './Header.component';


@Component({
  selector: 'app-root',
  imports: [HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true
})
export class AppComponent {
  title = 'angular-project';
}
