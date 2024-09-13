import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class  DataService {

     currentUser:any


  constructor() { }

 userDetails:any={
   1000:{acno:1000,username:"anu",password:"123a",balance:0},
   1001:{acno:1001,username:"dev",password:"123d",balance:0},
   1002:{acno:1002,username:"hima",password:"123h",balance:0},
   1003:{acno:1003,username:"rudhru",password:"123r",balance:0}
}

 
 
  
    register(username:any,acno:any,psw:any){
      if(acno in this.userDetails){
        return false
      }
      else{
         this.userDetails[acno]={acno,username,password:psw,balance:0}
         console.log(this.userDetails[acno]);
         return true
      }
    }
  
   login(acno:any,psw:any){

    var userDetails=this.userDetails
    if(acno in  userDetails){
      if(psw==userDetails[acno]["password"]){
        this.currentUser=userDetails[acno]["username"]
        console.log(this.currentUser);
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

  console.log(userDetails);
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
  if(password  == userDetails[acnum]["password"]){
      if(amnt <= userDetails[acnum]["balance"]){
    
        //update the balance
  userDetails[acnum]["balance"]-=amnt
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


   }

  