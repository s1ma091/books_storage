import {Component} from '@angular/core';
import { NgForm} from '@angular/forms';
import { TaskService} from '../../services/task.service';
import { Cookie } from '../../npm/ng2-cookies/ng2-cookies';
import {RatingModule} from '../../npm/ng2-rating';

@Component({
    moduleId: module.id,
    selector: 'add',
    styleUrls: ['./add.component.css'],
    templateUrl: './add.component.html'
})
export class AddComponent {
    files: FileList;
    filestring: string;
    public date = new Date()
    public author;
    public title;
    public raiting;
    public status;
    public description;
    public fileData;
    constructor(private taskService: TaskService) { }
    public id = Cookie.get('_id');
    public book;
    public del() {
        document.location.hash = 'books';
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
    public addBook(myForm) {
        var newBook = {
            status: myForm.value.status,
            title: myForm.value.title,
            author: myForm.value.author,
            user: this.id,
            description: myForm.value.description,
            raiting: myForm.value.raiting,
            date: this.date,
            fileData: this.filestring
        }
        this.taskService.addBook(newBook)
            .subscribe(book => {
                this.author = '';
                this.title = '';
                this.status = '';
                this.description = '';
                this.status = '';
                this.raiting = '';
            });
    }
}