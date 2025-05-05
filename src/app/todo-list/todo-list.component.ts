import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TodoService, Todo } from '../todo.service';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  todos: Todo[] = [];
  newTodoTitle = '';
  editingId: number | null = null;
  editText = '';
  
  constructor(private todoService: TodoService) {
    this.todos = this.todoService.getTodos();
  }
  
  addTodo(): void {
    this.todoService.addTodo(this.newTodoTitle);
    this.newTodoTitle = '';
  }
  
  deleteTodo(id: number): void {
    this.todoService.deleteTodo(id);
  }
  
  toggleComplete(id: number): void {
    this.todoService.toggleComplete(id);
  }
  
  startEditing(todo: Todo): void {
    this.editingId = todo.id;
    this.editText = todo.title;
  }
  
  saveEdit(): void {
    if (this.editingId !== null) {
      this.todoService.updateTodo(this.editingId, this.editText);
      this.editingId = null;
    }
  }
  
  cancelEdit(): void {
    this.editingId = null;
  }
}