import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-git-user-info',
  templateUrl: './git-user-info.component.html',
  styleUrls: ['./git-user-info.component.css']
})
export class GitUserInfoComponent implements OnInit {
  loginId: any;

  constructor(private route : ActivatedRoute, private userservice : UserService) { }

  ngOnInit() {
 
    this.route.paramMap.subscribe( params =>{
      this.loginId = params.get("login");
      this.userservice.userDetails(params.get("login")).subscribe(response =>{
       console.log(response)
      },err =>{
       console.log(err)
      })
       
    })
   
  }


}
