import { Component, OnInit } from '@angular/core';

import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {

  constructor( public taskService: TaskService ) { }

  ngOnInit(): void {
  }

  addTask(newTitulo:HTMLInputElement , newDescripcion:HTMLInputElement ){
    this.taskService.addTask({
      titulo: newTitulo.value,
      descripcion: newDescripcion.value
      ,hide: true
    });
    newTitulo.value='';
    newDescripcion.value='';
    newTitulo.focus();

    return false;
  }
}
