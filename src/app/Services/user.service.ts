import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()
export class UserService {
  typing: String;

  constructor(private http : Http) { }
  
   private gitApi : String = "https://api.github.com/search/users?q="
   private users : String = "https://api.github.com/users/"

   userList(typing){
      let url = this.gitApi.concat(typing)
      let header = new Headers({
        'Content-Type':'application/json'
      })
      return this.http.get(url,{headers : header})
   }

   userDetails(loginId){
      let url = this.users.concat(loginId)
      let header = new Headers({
        'Content-Type':'application/json'
      })
     return this.http.get(url,{headers : header})
   }


 
}
