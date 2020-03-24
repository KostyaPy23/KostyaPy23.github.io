import { Component, Input, OnInit } from '@angular/core';
import { Task } from "../../models/task";
import { Todo } from "../../models/todo";
import { TodoDataService } from "../../services/todo-data.service";
import { CdkDragDrop, moveItemInArray, transferArrayItem } from "@angular/cdk/drag-drop";

@Component({
  selector: 'app-task-list-card',
  templateUrl: './task-list-card.component.html',
  styleUrls: ['./task-list-card.component.scss']
})
export class TaskListCard {
  @Input() taskItem: Task[];
  @Input() cardTitle: string;
  newTodo: Todo = new Todo({});
  todoStore: Task[] = [];

  constructor(private todoDataService: TodoDataService) {
  }

  ngOnInit(): void {
  }

  addTodo() {
    this.todoDataService.addTodo(this.newTodo, this.todoStore);
    this.newTodo = new Todo({});
    console.log('dfdf')
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

  getScheduleList(): Task[] {
    const schedule: Task[] = [
      { id: 2, title: 'name', complete: false},
      { id: 3, title: 'name1', complete: false},
    ];
    return schedule;
  }

  toggleComplete(todo) {
    this.todoDataService.toggleTodoComplete(todo);
  }

  removeTodo(todo) {
    this.todoDataService.deleteTodoById(todo.id);
  }

  updateTodo(todo) {
    this.todoDataService.updateTodoById(todo.id, todo.title);
  }

  get todos() {
    return this.todoDataService.getAll();
  }
}
