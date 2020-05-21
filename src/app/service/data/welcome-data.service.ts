
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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
  //  let basicAuthHeaderString=this.createBasicAuthenticationHttpHeader();
  //  let headers =new HttpHeaders({
  //    Authorization:basicAuthHeaderString
  //  })

    return this.http.get<HelloWorld>(`http://localhost:8081/hello-world/path-variable/${name}` ,
    // {headers}
     ); //we use back tick for taking the variable or parameter vaue (``)
    // console.log("Execute Hello");
  }

  // createBasicAuthenticationHttpHeader(){
  //   let username='prity'
  //   let password='prity@13'
  //   let basicAuthHeaderString ='Basic '+ window.btoa(username +':'+ password);
  //   return basicAuthHeaderString;
  // }

  // Access to XMLHttpRequest at 'http://localhost:8081/hello-world/path-variable/prity' from origin 'http://localhost:4200' 
  // has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.

  // Access to XMLHttpRequest at 'http://localhost:8081/hello-world/path-variable/prity' from origin 'http://localhost:4200' 
  // has been blocked by CORS policy: Response to preflight request doesn't pass access control check: It does not have HTTP ok status.
}
