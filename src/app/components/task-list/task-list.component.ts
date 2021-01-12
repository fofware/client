import { Component, OnInit } from '@angular/core';

import {TaskComponent} from '../task/task.component';
import { TaskService } from '../../services/task.service';
import { iTask } from 'src/app/models/iTask';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  tasks: iTask[];

  constructor(
    public taskService: TaskService
  ) { }

  ngOnInit(): void {
    this.tasks = this.taskService.getTareas();
  }

}
