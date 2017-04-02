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
var task_service_1 = require('../../services/task.service');
var ng2_cookies_1 = require('../../npm/ng2-cookies/ng2-cookies');
var User = (function () {
    function User() {
    }
    return User;
}());
var LoginComponent = (function () {
    function LoginComponent(taskService) {
        var _this = this;
        this.taskService = taskService;
        this.goHome = function () {
            var newUser = {
                login: _this.login,
                password: _this.password
            };
            _this.taskService.getTasks(_this.login, _this.password)
                .subscribe(function (tasks) {
                if (tasks[0]) {
                    ng2_cookies_1.Cookie.set('login', tasks[0].login);
                    ng2_cookies_1.Cookie.set('_id', tasks[0]._id);
                    document.location.hash = 'books';
                }
                else {
                    alert('Login or Password is not correct. Please try again or Sign Up');
                }
            });
        };
        this.goToReg = function () {
            document.location.hash = 'regis';
        };
    }
    LoginComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.css'],
            providers: [task_service_1.TaskService, ng2_cookies_1.Cookie]
        }), 
        __metadata('design:paramtypes', [task_service_1.TaskService])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map