import { NgModule }      from '@angular/core';
import {RouterModule} from "@angular/router";
import {rootRouterConfig} from "./app.routes";
import { BrowserModule } from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import {FormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import { HomeComponent } from './components/home/home.component';
import { EditComponent } from './components/edit/edit.component';
import { AddComponent } from './components/add/add.component';
import { BooksComponent } from './components/books/books.component';
import {LoginComponent} from './components/login/login.component';
import {RegisComponent} from './components/regis/regis.component';
import { Cookie } from './npm/ng2-cookies/ng2-cookies';
import { SortPipe } from './components/pipe';
import { SearchPipe } from './components/searchPipe';


@NgModule({
    imports: [BrowserModule, HttpModule, FormsModule, RouterModule.forRoot(rootRouterConfig)],
    declarations: [AppComponent, HomeComponent, SortPipe, SearchPipe,
        AddComponent,
        EditComponent,
        BooksComponent,
        LoginComponent,
        RegisComponent],
    providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }, Cookie, SortPipe, SearchPipe],
    bootstrap: [AppComponent],
    exports: [SortPipe, SearchPipe]
})
export class AppModule { }
