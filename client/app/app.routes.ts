import {Routes} from '@angular/router';
import {AddComponent} from './components/add/add.component';
import {BooksComponent} from './components/books/books.component';
import { EditComponent } from './components/edit/edit.component';
import {HomeComponent} from './components/home/home.component';
import {LoginComponent} from './components/login/login.component';
import {RegisComponent} from './components/regis/regis.component';

export const rootRouterConfig: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'books', component: BooksComponent },
    { path: 'regis', component: RegisComponent },
    { path: 'add', component: AddComponent },
    { path: 'edit', component: EditComponent }
];