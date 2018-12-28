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
  

  constructor(private userservice : UserService) { }

  ngOnInit() {
  }

  myData(){
    let typing = {
      'search' : this.search
    }
    this.userservice.userList(this.search).subscribe(res =>{
      this.totalCount = res.json().total_count;
      this.listUser = res.json().items;
      this.notfound = this.search
    }, err =>{
      console.log(err)
    })
  }

  keyDownFunction(event) {
    if(event.keyCode == 13) {
     this.myData()
    }
  }

}
