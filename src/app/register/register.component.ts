import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements  OnInit {

  userNAME=''
  accNUM=''
  psw=''
 

  constructor(private ds:DataService, private router:Router)  { }
  ngOnInit(): void {
    
  }


  register(){
    
    

    var username=this.userNAME
    var accnumber=this.accNUM
    var password=this.psw

     const result=this.ds.register(username,accnumber,password)
      if(result){
        alert("registerd")
        this.router.navigateByUrl("")
      }
      else{
        alert("account number is already registerd")
      }

    console.log(username,accnumber,password)
  }
  
  

}
