import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { todo } from 'src/app/todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  @Input()
  todo: todo;
  @Output() todoDelete: EventEmitter<todo>= new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
onClick(todo:todo){
  this.todoDelete.emit(todo);
  console.log("on click has been triggered")
}
}
