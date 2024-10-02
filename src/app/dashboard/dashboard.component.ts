import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  user:any
  acno: any 

  datedetails:any

  //acno1:any
 // psw1:any
  //amount1:any

  //acno2:any
  //psw2:any
  //amount2:any

constructor (private ds:DataService, private fb:FormBuilder, private router:Router){
   this.user = JSON.parse(localStorage.getItem("currentUser") || "")

   //access the details
   this.datedetails=new Date()
}

 depositForm=this.fb.group({
    acno1:['',[Validators.required,Validators.pattern('[0-9]+')]],
    psw1:['',[Validators.required,Validators.pattern('[0-9A-Za-z]+')]],
    amount1:['',[Validators.required,Validators.pattern('[0-9]+')]]

 })

 withdrwalForm=this.fb.group({
    acno2:['',[Validators.required,Validators.pattern('[0-9]+')]],
    psw2:['',[Validators.required,Validators.pattern('[0-9A-Za-z]+')]],
    amount2:['',[Validators.required,Validators.pattern('[0-9]+')]]

 })

    ngOnInit(): void {
      // if(!localStorage.getItem("currentAccno")){
        //   alert("Please login")
          // this.router.navigateByUrl("")
      // }
       
    }
  



deposit(){
  var acno1=this.depositForm.value.acno1
  var psw1=this.depositForm.value.psw1
  var amount1=this.depositForm.value.amount1

  if(this.depositForm.valid){
      this.ds.deposit(acno1,psw1,amount1).subscribe((result:any)=>{
          alert(result.message)
      },
        result=>{
          alert(result.error.message)
        }
      )
    }
    else{
      alert("Error! invalid form")
    }  
}


  

withdrawl(){
  var acno2=this.withdrwalForm.value.acno2
  var psw2=this.withdrwalForm.value.psw2
  var amount2=this.withdrwalForm.value.amount2
 
   if(this.withdrwalForm.valid) {
        this.ds.withdrawl(acno2, psw2, amount2).subscribe((result:any)=>{
            alert(result.message)
          },
            result =>{
            alert(result.error.message)
          }
       )
     }
   else{
    alert("Error! invalid form")
   }  
  }



logout(){
  localStorage.removeItem("currentUser")
  localStorage.removeItem("currentAccno")
  this.router.navigateByUrl("")
}


deleteParent(){
    this.acno=JSON.parse(localStorage.getItem("currentAccno") || "")

}

cancel(){
    this.acno=''
}

}