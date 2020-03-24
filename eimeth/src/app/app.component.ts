import { Component, OnInit } from '@angular/core';
import { Task } from "./models/task";
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { TodoDataService } from "./services/todo-data.service";
import { Todo } from "./models/todo";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [TodoDataService],
})
export class AppComponent implements OnInit {
  lists = [
    { title: 'Do first', id: 1, },
    { title: 'Schedule', id: 2, },
    { title: 'Delegate', id: 3, },
    { title: 'Don’t do', id: 4, },
  ]

  ngOnInit(): void {
  }
}
