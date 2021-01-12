import { Injectable } from '@angular/core';

import {iTask} from '../models/iTask';


@Injectable({
  providedIn: 'root'
})

export class TaskService {

  tasks: iTask[];

  constructor() { 
    this.tasks=[];
    this.getTareas();
  }

  haveStorage(): boolean{
    if( typeof localStorage === "object") return true;
    return false;
  }

  getTareas(){
    const data =localStorage.getItem('tasks');
    if (data !== null) this.tasks = JSON.parse( data );
    return this.tasks;
  }
  addTask(task: iTask){
    this.tasks.push(task);
    this.update();
  }
  delete(i:number){
    this.tasks.splice(i, 1);
    this.update();
  }
  update(){
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}
