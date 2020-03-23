import { Component, OnInit } from '@angular/core';
import { Task } from "./models/task";
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  doFirs: Task[]
  schedule: Task[]
  delegate: Task[]
  notToDo: Task[]
  backlog: Task[]

  ngOnInit(): void {
    this.doFirs = this.getDoFirstList();
    this.schedule = this.getScheduleList();
    this.getDelegateList();
    this.getNotToDoList();
  }

  addNewItem() {
    const newItem = {
      name: 'Task ' + Math.floor(Math.random() * 1001),
      value: 10,
    };

    this.doFirs.push(newItem);
  }

  drop(event: CdkDragDrop<Task[], any>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

  // getDoFirstList(): ({ name: string; value: number } | { name: string; value: number })[] {
  getDoFirstList(): Task[] {
    const doFirs: Task[] = [
      { name: 'name', value: 10},
      { name: 'name2', value: 12},
    ];

    return doFirs;
  }

  getScheduleList(): Task[] {
    const schedule: Task[] = [
      { name: 'name3', value: 10},
      { name: 'name4', value: 12},
    ];
    return schedule;
  }

  getDelegateList(): number[] {
    return;
  }

  getNotToDoList(): number[] {
    return;
  }
}
