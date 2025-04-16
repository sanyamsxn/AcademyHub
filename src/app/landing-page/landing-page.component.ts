import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { BranchCubesComponent } from '../branch-cubes/branch-cubes.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [HeaderComponent, BranchCubesComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {

}
