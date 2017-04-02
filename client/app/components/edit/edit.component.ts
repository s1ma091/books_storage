import {Component} from '@angular/core';
import { NgForm} from '@angular/forms';
import { TaskService} from '../../services/task.service';
import { Cookie } from '../../npm/ng2-cookies/ng2-cookies';
@Component({
    moduleId: module.id,
    selector: 'adit',
    styleUrls: ['./edit.component.css'],
    templateUrl: './edit.component.html'
})


export class EditComponent {
    public book = Cookie.get('book');
    public user = Cookie.get('_id')
    public books = [];
    files: FileList;
    filestring: string;
    constructor(private taskService: TaskService) {
        console.log(this.book)
        this.taskService.getOnTask(this.book)
            .subscribe(book => {
                console.log(this.user)
                this.books = book;

            });


    }
    addFile(event) {
        this.files = event.target.files;
        var reader = new FileReader();
        reader.onload = this._handleReaderLoaded.bind(this);
        reader.readAsBinaryString(this.files[0]);
    }
    _handleReaderLoaded(readerEvt) {
        var binaryString = readerEvt.target.result;
        this.filestring = btoa(binaryString);  // Converting binary string data. 
    }

    public date = new Date()
    public editBook(book) {
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
        this.taskService.updateStatus(_book).subscribe(data => {
            document.location.hash = 'books';
        });
    }
}
