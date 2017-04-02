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
var EditComponent = (function () {
    function EditComponent(taskService) {
        var _this = this;
        this.taskService = taskService;
        this.book = ng2_cookies_1.Cookie.get('book');
        this.user = ng2_cookies_1.Cookie.get('_id');
        this.books = [];
        this.date = new Date();
        console.log(this.book);
        this.taskService.getOnTask(this.book)
            .subscribe(function (book) {
            console.log(_this.user);
            _this.books = book;
        });
    }
    EditComponent.prototype.addFile = function (event) {
        this.files = event.target.files;
        var reader = new FileReader();
        reader.onload = this._handleReaderLoaded.bind(this);
        reader.readAsBinaryString(this.files[0]);
    };
    EditComponent.prototype._handleReaderLoaded = function (readerEvt) {
        var binaryString = readerEvt.target.result;
        this.filestring = btoa(binaryString); // Converting binary string data. 
    };
    EditComponent.prototype.editBook = function (book) {
        var _book = {
            _id: book._id,
            title: book.title,
            author: book.author,
            status: book.status,
            description: book.description,
            raiting: book.raiting,
            user: this.user,
            fileData: this.filestring,
            date: this.date
        };
        this.taskService.updateStatus(_book).subscribe(function (data) {
            document.location.hash = 'books';
        });
    };
    EditComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'adit',
            styleUrls: ['./edit.component.css'],
            templateUrl: './edit.component.html'
        }), 
        __metadata('design:paramtypes', [task_service_1.TaskService])
    ], EditComponent);
    return EditComponent;
}());
exports.EditComponent = EditComponent;
//# sourceMappingURL=edit.component.js.map