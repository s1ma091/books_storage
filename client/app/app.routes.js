"use strict";
var add_component_1 = require('./components/add/add.component');
var books_component_1 = require('./components/books/books.component');
var edit_component_1 = require('./components/edit/edit.component');
var home_component_1 = require('./components/home/home.component');
var login_component_1 = require('./components/login/login.component');
var regis_component_1 = require('./components/regis/regis.component');
exports.rootRouterConfig = [
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'books', component: books_component_1.BooksComponent },
    { path: 'regis', component: regis_component_1.RegisComponent },
    { path: 'add', component: add_component_1.AddComponent },
    { path: 'edit', component: edit_component_1.EditComponent }
];
//# sourceMappingURL=app.routes.js.map