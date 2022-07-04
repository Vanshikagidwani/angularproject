import { Component, OnInit } from '@angular/core';
import {todo} from "../../todo";

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  todos:todo[];
  localItem:any;

  constructor() { 
  this.localItem=localStorage.getItem("todos");
    if (this.localItem==null){
      this.todos=[];
    }
    else{
      this.todos=JSON.parse(this.localItem)
    }
  
}

  ngOnInit(): void {
  }
  deleteTodo(todo:todo){
    console.log(todo)
    const index= this.todos.indexOf(todo);
    this.todos.splice(index,1)
    localStorage.setItem("todos",JSON.stringify(this.todos))
  }
  addTodo(todo:todo){
    console.log(todo);
    this.todos.push(todo);
    localStorage.setItem("todos",JSON.stringify(this.todos)) 
  }
}


