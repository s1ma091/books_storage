import {Component, OnInit} from '@angular/core';
import {TaskService} from '../../services/task.service';
import {Response} from '@angular/http';
import { Cookie } from '../../npm/ng2-cookies/ng2-cookies';
class User {
    name: string;
}
@Component({
    moduleId: module.id,
    selector: 'home',
    styleUrls: ['./home.component.css'],
    templateUrl: './home.component.html',
    providers: [TaskService]
})


export class HomeComponent implements OnInit {
    public cok = Cookie.get('login');
    user: User;
    constructor(private httpService: TaskService) { }
    public logOut() {
        Cookie.deleteAll()
        document.location.hash = 'login'
    }
    ngOnInit() {

    }
}