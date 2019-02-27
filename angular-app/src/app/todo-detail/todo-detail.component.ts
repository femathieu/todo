import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../todo';
import { TodoListComponent } from '../todo-list/todo-list.component';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.css']
})
export class TodoDetailComponent implements OnInit {
  @Input() todo: Todo;

  constructor(public todoService: TodoService) { }

  ngOnInit() {
  }

  onCheckChange(event: any): void {
    this.todo.check = event;
    this.todoService.markDone(this.todo);
  }

}
