import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-localstorag',
  templateUrl: './localstorag.component.html',
  styleUrls: ['./localstorag.component.css']
})
export class LocalstoragComponent implements OnInit {

  constructor(public taskService: TaskService) {
    
  }

  ngOnInit(): void {
  }

}
