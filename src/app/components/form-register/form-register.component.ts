import { Component } from '@angular/core';
import { InputComponent } from '../input/input.component';


@Component({
  selector: 'app-form-register',
  standalone: true,
  imports: [InputComponent],
  templateUrl: './form-register.component.html',
  styleUrl: './form-register.component.css'
})
export class FormRegisterComponent {

}
