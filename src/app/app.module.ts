import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { HttpModule} from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { GitSearchComponent } from './git-search/git-search.component';
import { GitUserInfoComponent } from './git-user-info/git-user-info.component';
import { UserService } from './Services/user.service';


const appRoutes : Routes =[
  { path: '', redirectTo: 'gitSearch', pathMatch: 'full'}, 
  {
      path : 'gitSearch',
      component : GitSearchComponent
  },
  {
    path : 'userInfo/:login',
    component : GitUserInfoComponent
  }

] 



@NgModule({
  declarations: [
    AppComponent,
    GitSearchComponent,
    GitUserInfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
   UserService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
