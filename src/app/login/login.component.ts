import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


   data="Your Perfect Banking Partner"
   inputplaceholder="account Number"


  
  

  constructor(private router:Router, private ds:DataService,private fb:FormBuilder){ }

  //model form
  loginForm=this.fb.group({
  acno:['',[Validators.required,Validators.pattern('[0-9]+')]],
  password:['',[Validators.required,Validators.pattern('[0-9A-Za-z]+')]]
})


  ngOnInit(): void {
    
  }

  login(){
 
    var acnum=this.loginForm.value.acno
    var psw=this.loginForm.value.password
    
    if(this.loginForm.valid){
   const result= this.ds.login(acnum,psw)
   if(result){
    alert("login success")
    this.router.navigateByUrl("dashboard")
   }
   else{
    alert(" Error! invalid password or account number")
   }
  }
   else{
    alert(" Error! invalid information")
   }
 }

}
