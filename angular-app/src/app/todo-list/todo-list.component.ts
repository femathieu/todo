import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { TodoService } from '../todo.service';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})

export class TodoListComponent implements OnInit {
  todoList: Todo[];

  constructor(public todoService: TodoService) { }

  ngOnInit() {
    console.log("todo list component -> ngOnInit")
    // this.getList();
  }

  // getList(): void {
  //   this.todoService.getList().subscribe((todoList) => {
  //     this.todoList = todoList;
  //     console.log("getList in todo list component", this.todoList);
  //   });
  // }

}
