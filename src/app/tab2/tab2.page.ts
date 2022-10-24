import { Component } from '@angular/core';
import { TasksService } from '../services/tasks.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  public tasks: string[];
  public task: string;

  constructor(private taskService:TasksService){
    this.tasks = this.taskService.getCompletedTasks();
  }

  public decompleteTask(pos:number){
    let taskAux = this.taskService.getCompletedTask(pos);
    this.taskService.addTask(taskAux);
    this.taskService.decompleteTask(pos);
    this.tasks=this.taskService.getCompletedTasks();
    console.log(this.tasks)
  }
}