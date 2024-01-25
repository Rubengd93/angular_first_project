import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RegisterComponent } from './pages/register/register.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { BooksComponent } from './pages/books/books.component';
import { AddBookComponent } from './pages/add-book/add-book.component';
import { UpdateBookComponent } from './pages/update-book/update-book.component';

export const routes: Routes = [
    { path:'', redirectTo: 'home', pathMatch: 'full' },
    { path: "home", component: HomeComponent },
    { path: "profile", component: ProfileComponent },
    { path: "Register", component: RegisterComponent },
    { path: "books", component: BooksComponent },
    { path: "addBook", component: AddBookComponent },
    { path: "updateBook", component: UpdateBookComponent },

];
