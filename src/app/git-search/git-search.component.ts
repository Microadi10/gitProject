import { Component, OnInit } from '@angular/core';
import { UserService } from '../Services/user.service';
declare var $ : any

 
@Component({
  selector: 'app-git-search',
  templateUrl: './git-search.component.html',
  styleUrls: ['./git-search.component.css']
})
export class GitSearchComponent implements OnInit {

  search: String;
  listUser: any[];
  totalCount: number;
  notfound: String;
  search_user_data: any;
  searchList: Array<object>= [];
  emptyList: any;
  error: any;
   
  
  constructor(private userservice : UserService) { }

  ngOnInit() {
    
  }

  myData(){
    let typing = {
      'search' : this.search
    }
    this.searchList = []
    
    this.userservice.userList(this.search).subscribe(res =>{
      this.totalCount = res.json().total_count;
      this.listUser = res.json().items;
      this.notfound = this.search
      for (let i = 0; i < this.listUser.length ; i++) {
        this.userservice.userDetails(this.listUser[i].login).subscribe(res => {
          this.search_user_data = res.json();
          this.searchList.push(this.search_user_data)
        }, err => {
        this.error = err.json().message;
        })
      }
    }, err =>{
      this.emptyList = err.json().message;
    })
  }
  p: number = 1;
  listBar: any[] = this.searchList;  


  keyDownFunction(event) {
    if(event.which == 13) {
     this.myData()
    }
  }

}
