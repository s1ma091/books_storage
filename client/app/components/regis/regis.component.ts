import { Component } from '@angular/core';
import { NgForm} from '@angular/forms';
import { TaskService} from '../../services/task.service';
class User {
    login: string;
    password: string;
}
@Component({
    moduleId: module.id,
    selector: 'regis',
    templateUrl: './regis.component.html',
    styleUrls: ['./regis.component.css']
})
export class RegisComponent {
    public user: User[];
    constructor(private taskService: TaskService) { }
    backToSignIn = () => {
        document.location.hash = 'login';
    }
    public login;
    public password;
    public signUp = () => {
        var newUser = {
            login: this.login,
            password: this.password
        }
        this.taskService.addTask(newUser)
            .subscribe(task => {
            });
        document.location.hash = 'login';
    }
}
