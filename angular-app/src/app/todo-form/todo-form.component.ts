import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../todo';
import { TodoService } from '../todo.service';
import { TodoListComponent } from '../todo-list/todo-list.component';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css'],
  providers: [TodoListComponent],
})

export class TodoFormComponent implements OnInit {
  todo: Todo;
  errorTitle: boolean;

  constructor(
    private todoService: TodoService,
  ) { }

  ngOnInit() {
    this.todo = new Todo();
    this.errorTitle = false;
  }

  save(): void {
    console.log('label ::::::', this.todo.label)
    if(this.todo.label === undefined){
      this.errorTitle = true;
    }else{
      this.errorTitle = false;
      this.todoService.save(this.todo);
    }
  }

}
