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
  name: string;
  username: string;
  email: string;
  oragnization: string;
  place: string;
  joinDate: any;
  image_url: any;
  blog: string;
  repo_url: string;
  follower_url: string;
  following_url: string;
  follow: any;
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
<<<<<<< HEAD
    clone_url: any;
    p: number = 1;
    following: any[] = this.listFollowing; 
    followers : any[] = this.listFollowers
  error: any;
  userrepo: any[];
=======
  clone_url: any;
  p: number = 1;
  paro: any[] = this.dia;
  follower: any[] = this.listFollowers;
  following: any[] = this.listFollowing;
  error: any;
>>>>>>> master

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
<<<<<<< HEAD
      
        this.http.get(res.json().repos_url).subscribe(res => {
          this.userrepo = res.json()
          this.repo_length = this.userrepo.length
        
        }, err => {
          this.error = err.json().message;
        })

        this.http.get(this.following_url).subscribe(res => {
      
=======

        this.http.get(res.json().repos_url).subscribe(res => {
          this.dia = res.json()
          this.repo_length = this.dia.length
        }, err => {
          this.error = err.json()
        })

        this.http.get(this.following_url).subscribe(res => {
>>>>>>> master
          this.following_users_data = res.json();
          this.following_count = this.following_users_data.length;
          for (let i = 0; i < this.following_users_data.length; i++) {
            this.userservice.userDetails(this.following_users_data[i].login).subscribe(res => {
              this.following_data = res.json();
              this.listFollowing.push(this.following_data)
            }, err => {
<<<<<<< HEAD
             this.error = err.json().message;
            })
          }
         
=======
              this.error = err.json().message;
            })
          }
>>>>>>> master
        }, err => {
          this.error = err.json().message;
        })

      }, err => {
        this.error = err.json().message;
      })
    });

  }


<<<<<<< HEAD
  follower(repourl) {
    this.userservice.userDetails(repourl).subscribe(data => {
      this.followers_data = data.json();
      this.followers_count = this.followers_data.length
      for (let i = 0; i < this.followers_data.length ; i++) {
=======
  followers(repourl) {
    this.userservice.userDetails(repourl).subscribe(data => {
      this.followers_data = data.json();
      this.followers_count = this.followers_data.length
      for (let i = 0; i < this.followers_data.length; i++) {
>>>>>>> master
        this.userservice.userDetails(this.followers_data[i].login).subscribe(res => {
          this.followers_user_data = res.json();
          this.listFollowers.push(this.followers_user_data)
        }, err => {
<<<<<<< HEAD
          this.error = err.json().message;
=======
          this.error = err.json().message
>>>>>>> master
        })
      }
    }, err => {
      this.error = err.json().message;
    })
  }

  openModal(cloneurl) {
    this.modal.open();
    this.clone_url = cloneurl;
  }

  close() {
    this.modal.close();
  }

<<<<<<< HEAD
  copyLink(){
   $( "input" ).select();
   document.execCommand("copy")
=======
  copyLink() {
    $("input").select();
    document.execCommand("copy")
>>>>>>> master
  }
}
