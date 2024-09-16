import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements  OnInit {

  

  constructor(private ds:DataService, private router:Router, private fb:FormBuilder)  { }

  //create reactive form of register form
      registerForm=this.fb.group({
      accNUM:['',[Validators.required,Validators.pattern('[0-9]+')]],
      userNAME:['',[Validators.required,Validators.pattern('[A-Za-z]+')]],
      psw:['',[Validators.required,Validators.pattern('[0-9A-Za-z]+')]]
  })




  ngOnInit(): void {
    
  }


  register(){
    
    

    var username=this.registerForm.value.userNAME
    var accnumber=this.registerForm.value.accNUM
    var password=this.registerForm.value.psw

    if(this.registerForm.valid){
     const result=this.ds.register(username,accnumber,password)
      if(result){
        alert("registerd")
        this.router.navigateByUrl("")
      }
      else{
        alert("account number is already registerd")
      }

    console.log(username,accnumber,password);
  }
  else{
    alert("invalid form")
  }
  }
  

}
