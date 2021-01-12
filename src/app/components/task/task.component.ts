import { Component, OnInit, Input } from '@angular/core';
import { iTask } from 'src/app/models/iTask';
import { TaskService } from 'src/app/services/task.service';
import { compileNgModuleFromRender2 } from '@angular/compiler/src/render3/r3_module_compiler';
import { compilePipeFromMetadata } from '@angular/compiler';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})

export class TaskComponent implements OnInit {

  @Input() task: iTask;
  @Input() index: number;

  constructor( public taskService: TaskService ) { }

  ngOnInit(): void {
  }

  delete(i:number){
    if ( confirm('Esta Seguro que quiere borrar este registro') ) 
      this.taskService.delete(i);
  }
}
