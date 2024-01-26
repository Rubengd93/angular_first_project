import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { User } from '../../models/user';

@Component({
  selector: 'app-form-login',
  standalone: true,
  imports: [CommonModule,FormsModule, ReactiveFormsModule],
  templateUrl: './form-login.component.html',
  styleUrl: './form-login.component.css'
})
export class FormLoginComponent {
  // public user: User;
  
  // constructor(){
  //   this.user = new User();
  // }

  // submit(form:NgForm){
  //   console.log(form);
  //   console.log(this.user);
  // }

  public formlogin: FormGroup = new  FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('',[Validators.required, Validators.minLength(4)])
  });

  public handlesubmit():void{
    console.log(this.formlogin.value);
    console.log(this.formlogin);
    
  }
}
