import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import {AuthService} from "./auth.service"
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [HeaderComponent, FormsModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
  user = {
    name: '',
    email: '',
    password: '',
    confirmP : ''
  };


  // constructor(private authService: AuthService) {}

  onSubmit(formI : NgForm) {
    console.log(formI.form.value.name);
    console.log(formI.form.value.email);
    console.log(formI.form.value.password);
    console.log(formI.form.value.confirmP);
    
  }
}
