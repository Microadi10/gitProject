import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule} from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { GitSearchComponent } from './git-search/git-search.component';
import { GitUserInfoComponent } from './git-user-info/git-user-info.component';
import { UserService } from './Services/user.service';
import { HeaderComponent } from './header/header.component';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import { MatTooltipModule } from '@angular/material/tooltip';


const appRoutes : Routes =[
  { path: '', redirectTo: 'gitSearch', pathMatch: 'full'}, 
  {
      path : 'gitSearch',
      component : GitSearchComponent
  },
  {
    path : 'userInfo/id=/:login',
    component : GitUserInfoComponent
  }
] 

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgxPaginationModule,
    MatInputModule,
    MatFormFieldModule,
    MatTabsModule,
    BrowserAnimationsModule, 
    MatTooltipModule,
    RouterModule.forRoot(appRoutes, {useHash:true})
  ],
  declarations: [
    AppComponent,
    GitSearchComponent,
    GitUserInfoComponent,
    HeaderComponent,
  ],
 
  providers: [
   UserService,
  ],
  bootstrap: [AppComponent] 
})
export class AppModule { }
