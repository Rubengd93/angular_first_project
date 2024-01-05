import { Component } from '@angular/core';
import { FormRegisterComponent } from '../../components/form-register/form-register.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { InputComponent } from '../../components/input/input.component';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormRegisterComponent, FooterComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

}
