import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';

export class Todo{
  constructor( 
    public id :number,
    public description:String,
    public done:boolean,
    public targetDate:Date
  ){
    
  }
}
@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})


export class ListTodosComponent implements OnInit {

  todos:Todo[]
  message:String

  // [
  //  new Todo(1,'Learn to Dance',false, new Date()),
  //  new Todo(2,'Become an Expert at Angular',false, new Date()),
  //   new Todo(3,'Visit India', false,new Date())
  // ]

  constructor(
    private todoService:TodoDataService
    
  ) { }

  ngOnInit() {
    this.refreshTodos();
  }
  refreshTodos(){
  this.todoService.retrieveAllTodos('Prity').subscribe(
    response=>{
    console.log(response);
    this.todos=response;
    }
  )
  }
  deleteTodo(id){
    this.todoService.deleteTodo('Prity',id).subscribe(
      response=>{
      console.log(response);
      this.message=`Delete of Todo ${id} Successful`;
      this.refreshTodos();
      }
    )
    
  }
  updateTodo(id){
    console.log(`update ${id}`)
  }
}

  