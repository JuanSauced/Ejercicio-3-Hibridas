import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  private tasks: string[] = [];
  private completedTasks: string[] = [];

  constructor() {
    this.tasks.push("Tarea 1");
    this.tasks.push("Tarea 2");
    this.completedTasks.push("Tarea 3");
    this.completedTasks.push("Tarea 4");
  }

  public getTasks():string[]{
    return this.tasks;
  }
  public addTask(task:string){
    this.tasks.push(task);
  }
  public removeTask(task:number){
    this.tasks.splice(task, 1);
  }
  public getTask(task:number){
    return this.tasks[task]
  }
  public getCompletedTasks():string[]{
    return this.completedTasks;
  }
  public completeTask(task:string){
    this.completedTasks.push(task)
  }
  public decompleteTask(task:number){
    this.completedTasks.splice(task, 1);
  }
  public getCompletedTask(task:number){
    return this.completedTasks[task];
  }
}
