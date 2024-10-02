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
        this.ds.login(acnum,psw).subscribe((result:any)=>{

            localStorage.setItem("currentUser", JSON.stringify(result.currentUser))
            localStorage.setItem("currentAccno", JSON.stringify(result.currentAccno))
            localStorage.setItem("token", JSON.stringify(result.token))
              
            alert(result.message)
            this.router.navigateByUrl("dashboard")   
        },
          result=>{
              alert(result.error.message)
          })
       }
    else{
      alert("Error! invalid form")
    }

  }          
}
