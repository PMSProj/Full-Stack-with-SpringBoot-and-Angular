import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username='prity'
  password=''
  errorMessage='Invalid Credentials'
  invalidLogin =false;


  //Router
  //Angular.givemeRouter
  //Dependency Injection
  constructor(private router:Router, 
    private hardcodedAuthenticationService:HardcodedAuthenticationService) { }

  ngOnInit() {
  }
  handleLogin(){
    // if(this.username==='prity' && this.password==='pk')
    if(this.hardcodedAuthenticationService.authenticate(this.username,this.password))
    {
      //Redirect to welcome page 
      this.router.navigate(['welcome',this.username])
      this.invalidLogin=false
    }
    else{
      this.invalidLogin=true
    }
    // console.log(this.username);
    // console.log(this.password);

    
  }

}
