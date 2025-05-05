import { Injectable } from '@angular/core';

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private todos: Todo[] = [
    { id: 1, title: 'Learn Angular', completed: false },
    { id: 2, title: 'Build a Todo App', completed: false }
  ];
  
  getTodos() {
    return this.todos;
  }
  
  addTodo(title: string) {
    if (title.trim()) {
      const newId = this.todos.length > 0 ? Math.max(...this.todos.map(t => t.id)) + 1 : 1;
      this.todos.push({
        id: newId,
        title: title.trim(),
        completed: false
      });
    }
  }
  
  updateTodo(id: number, title: string) {
    const todo = this.todos.find(t => t.id === id);
    if (todo && title.trim()) {
      todo.title = title.trim();
    }
  }
  
  deleteTodo(id: number) {
    const index = this.todos.findIndex(t => t.id === id);
    if (index !== -1) {
      this.todos.splice(index, 1);
    }
  }
  
  toggleComplete(id: number) {
    const todo = this.todos.find(t => t.id === id);
    if (todo) {
      todo.completed = !todo.completed;
    }
  }
}
