import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


   data="Your Perfect Banking Partner"
   inputplaceholder="Account number"

   acno=" "  // acno:any
   password=" "


  userDetails:any={
    1000:{acno:1000, username:"anu", password:"abc123a", balance:0},
    1001:{acno:1001, username:"dev", password:"abc123d", balance:0},
    1002:{acno:1002, username:"suha", password:"abc123s", balance:0},
    1003:{acno:1003, username:"manu", password:"abc123m", balance:0},
    1004:{acno:1004, username:"diya", password:"abc123d", balance:0},
    
  }

  constructor(){ }

  ngOnInit(): void {
    
  }

  login(){
    alert("login clicked")
  }

  acnochange(event:any){
     this.acno=event.target.value
     console.log(this.acno);
  }
 
  pswchange(event:any){
    this.password=event.target.value
    console.log(this.password);
  }
}
