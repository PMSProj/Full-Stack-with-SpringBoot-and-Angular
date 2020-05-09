
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class HelloWorld{
  constructor(public message:string){}
}


@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(
    private http:HttpClient
   ) {}

  executeHelloWorldBeanService(){
    return this.http.get<HelloWorld>('http://localhost:8081/hello-world-bean');
    // console.log("Execute Hello");
  }
  //http://localhost:8081/hello-world/path-variable/prity
  executeHelloWorldBeanServiceWithPathVariable(name){
    return this.http.get<HelloWorld>(`http://localhost:8081/hello-world/path-variable/${name}`); //we use back tick for taking the variable or parameter vaue (``)
    // console.log("Execute Hello");
  }
}
