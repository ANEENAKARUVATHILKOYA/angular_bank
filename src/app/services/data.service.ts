import { JsonPipe } from '@angular/common';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

//implement overloading globally
 const option = {
     headers : new HttpHeaders()
 }


@Injectable({
  providedIn: 'root'
})


export class  DataService {

     currentUser:any
     currentAccno:any
     userDetails:any 


  constructor(private http:HttpClient) {
    //this.getData() 
   }

 //userDetails:any={
   //1000:{acno:1000,username:"anu",password:"123a",balance:0,transaction:[]},
  //1001:{acno:1001,username:"dev",password:"123d",balance:0,transaction:[]},
   //1002:{acno:1002,username:"hima",password:"123h",balance:0,transaction:[]},
  //1003:{acno:1003,username:"rudhru",password:"123r",balance:0,transaction:[]}
 //}



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
//getData(){
  //if(localStorage.getItem('database')){
    //this.userDetails=JSON.parse(localStorage.getItem('database') || "")
  //}
  //if(localStorage.getItem('currentUser')){
    //this.currentUser=localStorage.getItem('currentUser')
  //}
  //if(localStorage.getItem('currentAccno')){
   // this.currentAccno=JSON.parse(localStorage.getItem('currentAccno') || "")
  //}
//}


//create method for access token
getToken(){
  //access token
  const token = JSON.parse(localStorage.getItem("token") || "")

  //generate header
  let headers = new HttpHeaders()

     if(token){
       //append token
       option.headers = headers.append("access_token",token)
     }
     return option
}


        

    register(username:any, acno:any, psw:any){
      //create body data 
       const data={username, acno, psw}
       //create api calls
       return this.http.post("http://localhost:3000/register",data)
    }


  

   login(acno:any, psw:any){
   //create body data
   const data={acno, psw}
   //create api call
   return this.http.post("http://localhost:3000/login",data)
  }



  
deposit(acnum:any, password:any, amount:any){
      const data={acnum, password, amount}
      return  this.http.post("http://localhost:3000/deposit", data, this.getToken())
   }




  
withdrawl(acnum:any, password:any, amount:any){
  const data={acnum, password, amount}
  return this.http.post("http://localhost:3000/withdrawl", data, this.getToken())
} 

getTransaction(acno:any){
     const data = {acno}
     return this.http.post("http://localhost:3000/getTransaction", data, this.getToken())
}

}