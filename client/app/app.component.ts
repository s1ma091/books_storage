import { Component } from '@angular/core';
import {TaskService} from './services/task.service';
import { NgForm} from '@angular/forms';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html',
    providers: [TaskService]
})

export class AppComponent { }
