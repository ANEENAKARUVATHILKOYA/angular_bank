import { JsonPipe } from '@angular/common';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class  DataService {

     currentUser:any
     currentAccno:any


  constructor() { }

 userDetails:any={
   1000:{acno:1000,username:"anu",password:"123a",balance:0,transaction:[]},
   1001:{acno:1001,username:"dev",password:"123d",balance:0,transaction:[]},
   1002:{acno:1002,username:"hima",password:"123h",balance:0,transaction:[]},
   1003:{acno:1003,username:"rudhru",password:"123r",balance:0,transaction:[]}
 }



//method created for calling the data stored in localstorage when it is needed
saveData(){
  if(this.userDetails){
     localStorage.setItem("database",JSON.stringify(this.userDetails))
  }
  if(this.currentUser){
    localStorage.setItem("currentUser",JSON.stringify(this.currentUser))
  }
  if(this.currentAccno){
     localStorage.setItem("currentAccno",JSON.stringify(this.currentAccno))
  }
}


//get the data from local storage
getData(){
  if(localStorage.getItem('database')){
    this.userDetails=JSON.parse(localStorage.getItem('database') || "")
  }
  if(localStorage.getItem('currentUser')){
    this.currentUser=localStorage.getItem('currentUser')
  }
  if(localStorage.getItem('currentAccno')){
    this.currentAccno=JSON.parse(localStorage.getItem('currentAccno') || "")
  }
}


        

    register(username:any,acno:any,psw:any){
      if(acno in this.userDetails){
        return false
      }
      else{
         this.userDetails[acno]={acno,username,password:psw,balance:0,transaction:[]}
         console.log(this.userDetails);

         this.saveData()

         return true
      }
    }


  
   login(acno:any,psw:any){

    var userDetails=this.userDetails
    if(acno in  userDetails){
      if(psw==userDetails[acno]["password"]){
        this.currentUser=userDetails[acno]["username"]
        console.log(this.currentUser);

        this.currentAccno=acno

        this.saveData()
        
        return true
}

else{
     return false 
}

}
else{
     return false 
}
   //alert("login clicked")
}


deposit(acnum:any, password:any, amount:any){
  let userDetails = this.userDetails

//convert string amount to number
var amnt=parseInt(amount)

if(acnum in userDetails){
  if(password== userDetails[acnum]["password"]){
    //update the balance
  userDetails[acnum]["balance"]+=amnt
  //console.log(userDetails);

//data transfer details
  userDetails[acnum]["transaction"].push({Type:"CREDIT",amount:amnt})

   this.saveData()

  //return current amount
  return userDetails[acnum]["balance"]
  }
  else{
    return false
  }
}
else{
  return false
}
}

  
withdrawl(acnum:any, password:any, amount:any){
  let userDetails = this.userDetails
 
//convert string amount to number
var amnt=parseInt(amount)

if(acnum in userDetails){
  if(password == userDetails[acnum]["password"]){
    if(amnt <= userDetails[acnum]["balance"]){
       
    //update balance
    userDetails[acnum]["balance"] -= amnt  
  
  
//data transfer details
userDetails[acnum]["transaction"].push({Type:"DEBIT",amount:amnt})
console.log(userDetails);
  
   
this.saveData()  

  //return current amount
  return userDetails[acnum]["balance"]
  }
      else{
        alert("insufficient balance")
         return false
      }   
  }
  else{
    alert("incorrect password")
    return false
  }
}

    else{
  alert("incorrect account number")
  return false
}
}

getTransaction(acno:any){
  return this.userDetails[acno]["transaction"]
}

}