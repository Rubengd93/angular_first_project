import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { FormRegisterComponent } from './components/form-register/form-register.component';
import { RegisterComponent } from './pages/register/register.component';
import { InputComponent } from './components/input/input.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { AddBookComponent } from './pages/add-book/add-book.component';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    RouterOutlet, 
    HeaderComponent, 
    FooterComponent, 
    HomeComponent,
    ProfileComponent, 
    FormRegisterComponent, 
    RegisterComponent, 
    InputComponent, 
    AddBookComponent,
    HttpClientModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MyBooks';
}
