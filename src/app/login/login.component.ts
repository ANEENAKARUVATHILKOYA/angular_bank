import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


   data="Your Perfect Banking Partner"
   inputplaceholder="account Number"

   acno:any         // acno: ""
   password:any

   userDetails:any={
    1000:{acno:1000,username:"anu",password:"123a",balance:0},
    1001:{acno:1001,username:"dev",password:"123d",balance:0},
    1002:{acno:1002,username:"hima",password:"123h",balance:0},
    1003:{acno:1003,username:"rudhru",password:"123r",balance:0}
 }
  

  constructor(private router:Router, private ds:DataService){ }

  ngOnInit(): void {
    
  }

  login(){
 
    var acnum=this.acno
    var psw=this.password
    
   const result= this.ds.login(acnum,psw)
   if(result){
    alert("login success")
    this.router.navigateByUrl("dashboard")
   }
   else{
    alert("incorrect password or account number")
   }
 }






}
