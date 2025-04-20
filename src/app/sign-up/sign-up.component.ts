import { Component, DestroyRef, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';

interface User{
  name:String;
  email : String;
}

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [ FormsModule, RouterModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
  success: boolean = false;
  error : boolean = false;

  private router = inject(Router);
  private httpClient = inject(HttpClient);
  private destroyRef = inject(DestroyRef);

  onSubmit(formI : NgForm) {
    const formData = formI.value;
    if(formData.valid){
      const subscription = this.httpClient.post('api', formData)
        .subscribe({
          next:(res)=>{
            this.success = true;
            formI.reset();
            setTimeout(() => {
              this.router.navigate(['/signin']);
            }, 1500);
          },
          error:(err)=>{
            this.error = true;
            formI.reset();
          }
        })
    }
    else{
      window.alert("Invalid form");
    }
    
  }
}
