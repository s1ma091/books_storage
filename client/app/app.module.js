"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require("@angular/router");
var app_routes_1 = require("./app.routes");
var platform_browser_1 = require('@angular/platform-browser');
var http_1 = require('@angular/http');
var common_1 = require('@angular/common');
var forms_1 = require('@angular/forms');
var app_component_1 = require('./app.component');
var home_component_1 = require('./components/home/home.component');
var edit_component_1 = require('./components/edit/edit.component');
var add_component_1 = require('./components/add/add.component');
var books_component_1 = require('./components/books/books.component');
var login_component_1 = require('./components/login/login.component');
var regis_component_1 = require('./components/regis/regis.component');
var ng2_cookies_1 = require('./npm/ng2-cookies/ng2-cookies');
var pipe_1 = require('./components/pipe');
var searchPipe_1 = require('./components/searchPipe');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, http_1.HttpModule, forms_1.FormsModule, router_1.RouterModule.forRoot(app_routes_1.rootRouterConfig)],
            declarations: [app_component_1.AppComponent, home_component_1.HomeComponent, pipe_1.SortPipe, searchPipe_1.SearchPipe,
                add_component_1.AddComponent,
                edit_component_1.EditComponent,
                books_component_1.BooksComponent,
                login_component_1.LoginComponent,
                regis_component_1.RegisComponent],
            providers: [{ provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy }, ng2_cookies_1.Cookie, pipe_1.SortPipe, searchPipe_1.SearchPipe],
            bootstrap: [app_component_1.AppComponent],
            exports: [pipe_1.SortPipe, searchPipe_1.SearchPipe]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map