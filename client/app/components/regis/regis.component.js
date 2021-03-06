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
var User = (function () {
    function User() {
    }
    return User;
}());
var RegisComponent = (function () {
    function RegisComponent(taskService) {
        var _this = this;
        this.taskService = taskService;
        this.backToSignIn = function () {
            document.location.hash = 'login';
        };
        this.signUp = function () {
            var newUser = {
                login: _this.login,
                password: _this.password
            };
            _this.taskService.addTask(newUser)
                .subscribe(function (task) {
            });
            document.location.hash = 'login';
        };
    }
    RegisComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'regis',
            templateUrl: './regis.component.html',
            styleUrls: ['./regis.component.css']
        }), 
        __metadata('design:paramtypes', [task_service_1.TaskService])
    ], RegisComponent);
    return RegisComponent;
}());
exports.RegisComponent = RegisComponent;
//# sourceMappingURL=regis.component.js.map