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
var AddComponent = (function () {
    function AddComponent(taskService) {
        this.taskService = taskService;
        this.date = new Date();
        this.id = ng2_cookies_1.Cookie.get('_id');
    }
    AddComponent.prototype.del = function () {
        document.location.hash = 'books';
    };
    AddComponent.prototype.addFile = function (event) {
        this.files = event.target.files;
        var reader = new FileReader();
        reader.onload = this._handleReaderLoaded.bind(this);
        reader.readAsBinaryString(this.files[0]);
    };
    AddComponent.prototype._handleReaderLoaded = function (readerEvt) {
        var binaryString = readerEvt.target.result;
        this.filestring = btoa(binaryString); // Converting binary string data. 
    };
    AddComponent.prototype.addBook = function (myForm) {
        var _this = this;
        var newBook = {
            status: myForm.value.status,
            title: myForm.value.title,
            author: myForm.value.author,
            user: this.id,
            description: myForm.value.description,
            raiting: myForm.value.raiting,
            date: this.date,
            fileData: this.filestring
        };
        this.taskService.addBook(newBook)
            .subscribe(function (book) {
            _this.author = '';
            _this.title = '';
            _this.status = '';
            _this.description = '';
            _this.status = '';
            _this.raiting = '';
        });
    };
    AddComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'add',
            styleUrls: ['./add.component.css'],
            templateUrl: './add.component.html'
        }), 
        __metadata('design:paramtypes', [task_service_1.TaskService])
    ], AddComponent);
    return AddComponent;
}());
exports.AddComponent = AddComponent;
//# sourceMappingURL=add.component.js.map