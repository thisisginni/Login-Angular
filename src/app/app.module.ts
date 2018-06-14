import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { HeaderComponent } from './header/header.component';
import { UserService } from './user.service';
import {AuthGuard} from './auth.guard';

const appRoutes:Routes=[{
  path:'',
  component:LoginFormComponent
},
{
  path:'dashboard',
  canActivate:[AuthGuard],
  component:DashboardComponent
}]

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginFormComponent,
    HeaderComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    
  ],
  providers: [UserService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
