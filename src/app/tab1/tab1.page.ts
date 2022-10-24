import { Component } from '@angular/core';
import { TasksService } from '../services/tasks.service';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  public tasks: string[];
  public task: string;
  @ViewChild('inputText') input;

  constructor(private taskService: TasksService) {
    this.tasks = this.taskService.getTasks();
  }

  addTask() {
    this.taskService.addTask(this.task);
    this.tasks = this.taskService.getTasks();
    console.log(this.tasks);
    this.task = "";
    this.input.setFocus();
  }

  public removeTask(pos: number) {
    this.taskService.removeTask(pos);
    this.tasks = this.taskService.getTasks();
    console.log(this.tasks);
  }

  public completeTask(pos: number) {
    let taskAux = this.taskService.getTask(pos);
    this.taskService.completeTask(taskAux);
    this.taskService.removeTask(pos);
    this.tasks = this.taskService.getTasks();
    console.log(this.tasks);
  }
}