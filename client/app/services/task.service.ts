import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class TaskService{
    constructor(private http:Http){
        console.log('Task Service Initialized...');
    }
    
    getTasks(login, password){
        return this.http.post('/api/tasks', {"login":login, "password":password})
            .map(res => res.json());
    }
      getOneTask(id){
        return this.http.post('/api/books', {"id":id})
            .map(res => res.json());
    }
        getOnTask(id){
        return this.http.put('/api/book/'+id, {"id":id})
            .map(res => res.json());
    }
    
    addBook(newTask){
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('/api/book', JSON.stringify(newTask), {headers: headers})
            .map(res => res.json());
    }
      addTask(newTask){
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('/api/task', JSON.stringify(newTask), {headers: headers})
            .map(res => res.json());
    }
    
    deleteTask(id){
        return this.http.delete('/api/book/'+id)
            .map(res => res.json());
    }
    
     editBook(id, edit){
                 var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.put('/api/book/'+id,  JSON.stringify(edit), {headers: headers})
            .map(res => res.json());
    }
    
    updateStatus(book){
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('/api/book/'+book._id, JSON.stringify(book), {headers: headers})
            .map(res => res.json());
    }
}