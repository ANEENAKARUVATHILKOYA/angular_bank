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
   inputplaceholder="Account number"

   acno=" "  // acno:any
   password=" "


  

  constructor(private router:Router, private ds:DataService){ }

  ngOnInit(): void {
    
  }

  login(){
 
    var acnum=this.acno
    var psw=this.password
    var userDetails=this.ds.userDetails

    if(acnum in userDetails){
          if(psw==userDetails[acnum]["password"]){
       alert("login successfully")
       this.router.navigateByUrl('dashboard')
    }
   
    else{
     alert("incurrect password")
    }

  }
    else{
      alert("account number is incurrect or not registerd")
    }


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
