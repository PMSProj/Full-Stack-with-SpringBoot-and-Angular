import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  message='Some welcome message'
  welcomeMessageFromService:string
  error:string
  name=''

  //Activate Router
  constructor(private route:ActivatedRoute,
              private service:WelcomeDataService) { }

  ngOnInit(){
    //console.log(this.message)
   // console.log(this.route.snapshot.params['name'])
  this.name=this.route.snapshot.params['name'];

  }
  getWelcomeMessage(){
    //console.log("get welcome message")
    // console.log(this.service.executeHelloWorldBeanService());

    this.service.executeHelloWorldBeanService().subscribe(
    response=>this.handleSuccessfulResponse(response),
    error=>this.handleErrorResponse(error)
    
    );
    // console.log('Last line of getWecomeMessage')
  }
  getWelcomeMessageWithParameter(){
    //console.log("get welcome message")
    // console.log(this.service.executeHelloWorldBeanService());

    this.service.executeHelloWorldBeanServiceWithPathVariable(this.name).subscribe(
    response=>this.handleSuccessfulResponse(response),
    error=>this.handleErrorResponse(error)
    
    );
    // console.log('Last line of getWecomeMessage')
  }

  handleSuccessfulResponse(response){
    this.welcomeMessageFromService=response.message //calling the message to display on the screen
   // console.log(response);
    //console.log(response.message);
  }
  handleErrorResponse(error){
    // console.log(error);
    this.error=error.error.message;
  }

}
