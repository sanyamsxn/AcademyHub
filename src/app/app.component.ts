import { Component } from '@angular/core';

import { HeaderComponent } from "./header/header.component";
import { DashboardComponent } from './dashboard/dashboard.component';
// import { HttpClientModule } from '@angular/common/http';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ HeaderComponent, RouterOutlet, DashboardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'academiHub';
}
