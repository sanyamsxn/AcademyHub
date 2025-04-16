import { Component } from '@angular/core';
import { LandingPageComponent } from "./landing-page/landing-page.component";
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HeaderComponent } from "./header/header.component";
// import { HttpClientModule } from '@angular/common/http';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LandingPageComponent, HeaderComponent, SignInComponent,SignUpComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'academiHub';
}
