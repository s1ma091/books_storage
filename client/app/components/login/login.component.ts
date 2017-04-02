import { Component } from '@angular/core';
import { NgForm} from '@angular/forms';
import { TaskService} from '../../services/task.service';
import { Cookie } from '../../npm/ng2-cookies/ng2-cookies';
class User {
    login: string;
    password: string;
}
@Component({
    moduleId: module.id,
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
    providers: [TaskService, Cookie]
})
export class LoginComponent {
    public user: User[];
    constructor(private taskService: TaskService) { }
    public login;
    public password;
    public goHome = () => {
        var newUser = {
            login: this.login,
            password: this.password
        }
        this.taskService.getTasks(this.login, this.password)
            .subscribe(tasks => {
                if (tasks[0]) {
                    Cookie.set('login', tasks[0].login)
                    Cookie.set('_id', tasks[0]._id)
                    document.location.hash = 'books';
                }
                else {
                    alert('Login or Password is not correct. Please try again or Sign Up')
                }
            });
    }
    public goToReg = () => {
        document.location.hash = 'regis';
    }
}

