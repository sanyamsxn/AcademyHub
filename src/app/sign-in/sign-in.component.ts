import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [RouterModule, FormsModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {

private http = inject(HttpClient);


onSubmit(form: NgForm){
  const formData=  form.value;
  if(form.valid){
    const subscription = this.http.post('api', formData).subscribe({
      next:(res)=>{
        //save token
      },
      error : (err)=>{
        window.alert("Something went wrong");
      }
    })
  }
  else{
    window.alert("Invalid")
  }
}

}
