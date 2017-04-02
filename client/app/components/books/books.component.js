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
var BooksComponent = (function () {
    function BooksComponent(taskService) {
        var _this = this;
        this.taskService = taskService;
        this.blockInfo = [];
        this.cok = ng2_cookies_1.Cookie.get('login');
        this.id = ng2_cookies_1.Cookie.get('_id');
        this.date = new Date();
        this.taskService.getOneTask(this.id)
            .subscribe(function (task) {
            _this.tasks = task;
        });
    }
    BooksComponent.prototype.search = function (e) {
        var val = e.target.value;
        this.val = val;
    };
    BooksComponent.prototype.reset = function () {
        document.querySelector('.searchPl').value = '';
        this.val = '';
    };
    BooksComponent.prototype.sorting = function (param) {
        this.param = param;
    };
    BooksComponent.prototype.showBook = function (i) {
        this.blockInfo = this.tasks[i];
    };
    BooksComponent.prototype.elStyle = function (e) {
        var elem = document.querySelector('.tabColor');
        if (elem) {
            elem.classList.remove('tabColor');
        }
        e.target.parentNode.classList.add('tabColor');
    };
    BooksComponent.prototype.goToEdit = function (id) {
        ng2_cookies_1.Cookie.set('book', id);
        document.location.hash = 'edit';
    };
    BooksComponent.prototype.delBook = function (id) {
        var tasks = this.tasks;
        if (confirm('Delete book?')) {
            this.taskService.deleteTask(id).subscribe(function (data) {
                if (data.n == 1) {
                    for (var i = 0; i < tasks.length; i++) {
                        if (tasks[i]._id == id) {
                            tasks.splice(i, 1);
                        }
                    }
                }
            });
        }
    };
    BooksComponent.prototype.downLoad = function (file) {
        this.downloadFile(file);
    };
    BooksComponent.prototype.downloadFile = function (data) {
        var file = new Blob([data], { type: 'text/html' });
        var downLoad = window.URL.createObjectURL(file);
        var a = document.createElement('a');
        a.href = downLoad;
        a.download = 'book.docx';
        document.body.appendChild(a);
        a.click();
    };
    BooksComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'books',
            styleUrls: ['./books.component.css'],
            templateUrl: './books.component.html',
        }), 
        __metadata('design:paramtypes', [task_service_1.TaskService])
    ], BooksComponent);
    return BooksComponent;
}());
exports.BooksComponent = BooksComponent;
//# sourceMappingURL=books.component.js.map