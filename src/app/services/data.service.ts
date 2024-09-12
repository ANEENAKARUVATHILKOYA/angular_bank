import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class DataService{

  current_user:any


  constructor() { }

  userDetails:any={
    1000:{acno:1000, username:"anu", password:"abc123a", balance:0},
    1001:{acno:1001, username:"dev", password:"abc123d", balance:0},
    1002:{acno:1002, username:"suha", password:"abc123s", balance:0},
    1003:{acno:1003, username:"manu", password:"abc123m", balance:0},
    1004:{acno:1004, username:"diya", password:"abc123d", balance:0},
    }
  
    register(username:any,acno:any,psw:any){
      if(acno in this.userDetails){
        return false
      }
      else{
         this.userDetails[acno]={acno,username,password:psw,balance:0}
         return true
      }
    }
  
   login(acno:any,psw:any){

    var userDetails=this.userDetails
    if(acno in userDetails){
      if(psw==userDetails[acno]["password"]){
        this.current_user=userDetails[acno]["username"]
        console.log(this.current_user);
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

   }

  