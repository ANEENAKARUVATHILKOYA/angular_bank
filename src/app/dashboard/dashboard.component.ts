import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  user:any

  acno1:any
  psw1:any
  amount1:any

  acno2:any
  psw2:any
  amount2:any

constructor (private ds:DataService){

   this.user= this.ds.currentUser

}

  ngOnInit(): void {
    
  }



deposit(){
  var acno1=this.acno1
  var psw1=this.psw1
  var amount1=this.amount1
  
  const result=this.ds.deposit(acno1,psw1,amount1)
  if(result){          //here we can put anything without FALSE considered as true
       alert(`your AC has been credited ${amount1}. and available balance ${result} `)
  }
  else{
    alert("incorrect account number or password")
  }


}

withdrawl(){
  var acno2=this.acno2
  var psw2=this.psw2
  var amount2=this.amount2
  const result= this.ds.withdrawl(acno2,psw2,amount2)
  if(result){
    alert(`your AC has been debited ${amount2}. and available balance is ${result}`)
  }

}


}

