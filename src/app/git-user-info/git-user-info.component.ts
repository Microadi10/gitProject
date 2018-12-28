import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../Services/user.service';
import { Http } from '@angular/http';

declare var $: any;

@Component({
  selector: 'app-git-user-info',
  templateUrl: './git-user-info.component.html',
  styleUrls: ['./git-user-info.component.css']
})

export class GitUserInfoComponent implements OnInit {
  loginId: any;
  name: any;
  username: any;
  email: any;
  oragnization: any;
  place: any;
  joinDate: any;
  image_url: any;
  blog: any;
  repo_url: string;
  follower_url: string;
  following_url: string;
  follow: any;
  dia: any[];
  license: any;
  repo_length: number;
  followers_data: any[];
  followers_count: number;
  followers_user_data: any;
  listFollowers: Array<object> = [];
  following_users_data: any;
  following_data: any;
  listFollowing: Array<object> = [];
  following_count: number;
  bio: string;
  modal: any;
  remodal: any;
    clone_url: any;

  constructor(private route: ActivatedRoute, private userservice: UserService, private http: Http) { }

  ngOnInit() {
    
    this.modal = $('#modal').remodal();

    this.route.paramMap.subscribe(params => {
      this.loginId = params.get("login");
      this.userservice.userDetails(params.get("login")).subscribe(res => {
        this.image_url = res.json().avatar_url;
        this.name = res.json().name;
        this.username = res.json().login;
        this.blog = res.json().blog;
        this.email = res.json().email;
        this.oragnization = res.json().company;
        this.place = res.json().location;
        this.bio = res.json().bio;
        this.joinDate = res.json().created_at;
        this.repo_url = res.json().repos_url;
        this.follower_url = res.json().followers_url;
        this.follower_url = this.follower_url.substring(this.follower_url.indexOf("users") + 6)
        this.following_url = res.json().following_url;
        this.following_url = this.following_url.substring(0, this.following_url.indexOf("{"));
        console.log(this.following_url)
        this.http.get(res.json().repos_url).subscribe(res => {
          this.dia = res.json()
          this.repo_length = this.dia.length
          console.log(this.dia.length)
        }, err => {

        })

        this.http.get(this.following_url).subscribe(res => {
          console.log(res)
          this.following_users_data = res.json();
          this.following_count = this.following_users_data.length;
          for (let i = 0; i <= this.following_users_data.length / 10 - 1; i++) {
            this.userservice.userDetails(this.following_users_data[i].login).subscribe(res => {
              this.following_data = res.json();
              this.listFollowing.push(this.following_data)
            }, err => {
              console.log(err)
            })
          }
          console.log(this.listFollowing)
        }, err => {
          console.log(err)
        })

      }, err => {
        console.log(err)
      })
    });


  }


  hello(repourl) {
    this.userservice.userDetails(repourl).subscribe(data => {
      this.followers_data = data.json();
      this.followers_count = this.followers_data.length
      for (let i = 0; i <= this.followers_data.length / 10 - 1; i++) {
        this.userservice.userDetails(this.followers_data[i].login).subscribe(res => {
          this.followers_user_data = res.json();
          this.listFollowers.push(this.followers_user_data)
        }, err => {
          console.log(err)
        })
      }
    }, err => {
      console.log(err)
    })
  }

  openModal(cloneurl) {
    this.modal.open();

    this.clone_url = cloneurl;

  }

  close() {
    this.modal.close();
  }

  copyLink(){
  
   $( "input" ).select();
  
   document.execCommand("copy")
  }
}
