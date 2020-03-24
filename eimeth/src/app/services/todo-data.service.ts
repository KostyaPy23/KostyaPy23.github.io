import { Injectable } from '@angular/core';
import { Todo } from "../models/todo";
import { Task } from "../models/task";

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {
  lastId: number = 0;
  todos: Todo[] = [];

  constructor() { }

  // post
  addTodo(todo: Todo, store: Task[]): TodoDataService {
    if (!todo.id) {
      todo.id = ++this.lastId;
    }
    // this.todos.push(todo);
    store.push(todo);
    return this;
  }

  // DELETE
  deleteTodoById(id: number): TodoDataService {
    this.todos = this.todos.filter(todo => todo.id !== id);
    return this;
  }

  // PUT
  updateTodoById(id: number, values: Object): Todo {
    let todo = this.getTodoById(id);
    if (!todo) return null;
    Object.assign(todo, values);
    return todo;
  }

  // GET
  getTodoById(id: number): Todo {
    return this.todos
      .filter(todo => todo.id === id)
      .pop()
  }

  // GET
  getAll(): Todo[] {
    return this.todos;
  }

  toggleTodoComplete(todo: Todo) {
    let updatedTodo = this.updateTodoById(todo.id, {
      complete: !todo.complete,
    });
    return updatedTodo;
  }
}
