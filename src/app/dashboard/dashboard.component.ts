import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  user:any

  //acno1:any
 // psw1:any
  //amount1:any

  //acno2:any
  //psw2:any
  //amount2:any

constructor (private ds:DataService, private fb:FormBuilder){
   this.user= this.ds.currentUser
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
    
  }



deposit(){
  var acno1=this.depositForm.value.acno1
  var psw1=this.depositForm.value.psw1
  var amount1=this.depositForm.value.amount1

  if(this.depositForm.valid){
  const result=this.ds.deposit(acno1,psw1,amount1)
  if(result){          //here we can put anything without FALSE considered as true
       alert(`your AC has been credited ${amount1}. and available balance ${result} `)
  }
  else{
    alert("Error! account number or password")
  }
}
  else{
    alert(" Error! invalid information")
  }
}

withdrawl(){
  var acno2=this.withdrwalForm.value.acno2
  var psw2=this.withdrwalForm.value.psw2
  var amount2=this.withdrwalForm.value.amount2

  if(this.withdrwalForm.valid){
  const result= this.ds.withdrawl(acno2,psw2,amount2)
  if(result){
    alert(`your AC has been debited ${amount2}. and available balance is ${result}`)
  }
  }
  else{
    alert(" Error! invalid information")
  }
}


}

