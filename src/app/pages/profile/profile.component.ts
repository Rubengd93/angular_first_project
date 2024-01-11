import { Component } from '@angular/core';
import { InputComponent } from '../../components/input/input.component';
import { User } from '../../models/user';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})

export class ProfileComponent {
  public user: User = {
  id_user : 1,
  name : 'Ruben',
  last_name : 'Vera',
  email : 'rubengd93@gmail.com',
  photo : 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
  password : '3432A'
  }

  public changeName (inputName: HTMLInputElement, inputLastName: HTMLInputElement, inputEmail: HTMLInputElement, inputUrl: HTMLInputElement){
    this.user.name = inputName.value;
    this.user.last_name = inputLastName.value;
    this.user.email = inputEmail.value;
    this.user.photo = inputUrl.value;

  }
}
