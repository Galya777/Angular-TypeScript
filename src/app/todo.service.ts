import { Injectable } from '@angular/core';
import { IdType, TodoRepository } from './todo-repository';
import { Todo } from './todomodel';
import MOCK_TODOS from './mock-todos';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
 
  constructor(private todoRepo: TodoRepository) {
    MOCK_TODOS.forEach(todo => this.todoRepo.create(todo))
  }
   

  getAllTodos(){
    this.todoRepo.findAll();
  }
  getTodoById(id: IdType){
    return this.todoRepo.findById(id);
  }
  addTodo(todo: Todo) {
    return this.todoRepo.create(todo);
  }
  updateTodo(todo: Todo) {
    return this.todoRepo.update(todo);
  }
  deleteTodoById(id: IdType) {
    return this.todoRepo.deleteById(id);
  }
  getTodosCount(){
    return this.todoRepo.count();
  }
}
