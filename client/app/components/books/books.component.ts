import {Component, Pipe, PipeTransform} from '@angular/core';
import { NgForm} from '@angular/forms';
import { TaskService} from '../../services/task.service';
import { Cookie } from '../../npm/ng2-cookies/ng2-cookies';
//import {RatingModule} from '../../npm/ng2-rating';
import { SortPipe} from '../pipe'
import { SearchPipe} from '../searchPipe'

@Component({
    moduleId: module.id,
    selector: 'books',
    styleUrls: ['./books.component.css'],
    templateUrl: './books.component.html',
})
export class BooksComponent {
    public param;
    public val;
    public tas;
    public tasks;
    public blockInfo = [];
    public cok = Cookie.get('login');
    public id = Cookie.get('_id');
    public date = new Date();
    constructor(private taskService: TaskService) {
        this.taskService.getOneTask(this.id)
            .subscribe(task => {
                this.tasks = task;
            })
    }
    public search(e) {
        var val = e.target.value;
        this.val = val;
    }
    public reset() {
       document.querySelector('.searchPl').value = '';
       this.val = '';
    }
    public sorting(param) {
        this.param = param
    }
    public showBook(i) {
        this.blockInfo = this.tasks[i];
    }
    public elStyle(e) {
        var elem = document.querySelector('.tabColor');
        if (elem) {
           elem.classList.remove('tabColor')
        }
        e.target.parentNode.classList.add('tabColor');
    }
    public goToEdit(id) {
        Cookie.set('book', id);
        document.location.hash = 'edit';
    }
    public delBook(id) {
        var tasks = this.tasks;
        if (confirm('Delete book?')) {
            this.taskService.deleteTask(id).subscribe(data => {
                if (data.n == 1) {
                    for (var i = 0; i < tasks.length; i++) {
                        if (tasks[i]._id == id) {
                            tasks.splice(i, 1);
                        }
                    }
                }
            });
        }
    }
    public downLoad(file) {
        this.downloadFile(file);
    }
    private downloadFile(data: any) {
        var file = new Blob([data], { type: 'text/html' });
        var downLoad = window.URL.createObjectURL(file);
        var a = document.createElement('a');
        a.href = downLoad;
        a.download = 'book.docx';
        document.body.appendChild(a);
        a.click();
    }
}
