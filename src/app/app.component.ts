import { TodoService } from './todo.service';
import { Component, OnInit } from '@angular/core';
import { Todo, TodoStatus } from './todomodel';

@Component({
  selector: 'td-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Angular TODOs Demo';
  todos: Todo[] = [] ;
  constructor(private todoService: TodoService){}

  ngOnInit(): void {
    
    this.refresh();
  }

  refresh() {
    this.todos = this.todoService.getAllTodos();
  }

  addTodo(todo: Todo) {
    this.todoService.addTodo(todo);
    this.refresh();
  }

  getTodoStatus (todostatus: TodoStatus){
    return TodoStatus[todostatus];
  }

}
