import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BasicsComponent } from './basics/basics.component';
import { DirectiveDemoComponent } from './directive-demo/directive-demo.component';
import { BasicHighlightDirective } from './basic-highlight/basic-highlight.directive';
import { BetterHighlightDirective } from './better-highlight.directive';
import { TaskTwoComponent } from './assignment/task-two/task-two.component';
import { TaskThreeComponent } from './assignment/task-three/task-three.component';
import { UnlessDirective } from './unless.directive';
import { AccountHomeComponent } from './account-home/account-home.component';
import { AccountNewComponent } from './account-home/account-new/account-new.component';
import { AccountDetailsComponent } from './account-home/account-details/account-details.component';
import { AccountService } from './account-home/account.service';
import { TaskFiveComponent } from './assignment/task-five/task-five.component';
import { ActiveUserComponent } from './assignment/task-five/active-user/active-user.component';
import { InactiveUserComponent } from './assignment/task-five/inactive-user/inactive-user.component';
import { Routes,RouterModule } from '@angular/router';
import { ServersComponent } from './servers/servers.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { DisplayServerComponent } from './servers/display-server/display-server.component';
import { CustomersComponent } from './customers/customers.component';
import { DisplayCustomerComponent } from './customers/display-customer/display-customer.component';
import { EditCustomerComponent } from './customers/edit-customer/edit-customer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
// import { AuthGuardService } from './auth-guard.service';



export const routes: Routes = [

  {path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: 'login', component:LoginComponent},
  {path: 'home', component:BasicsComponent},
  // {path:'directives' ,component:DirectiveDemoComponent,canActivate:[AuthGuardService]},
  // {path:'accounts' ,component:AccountHomeComponent,canActivate:[AuthGuardService]},

  {path:'accounts' ,component:AccountHomeComponent},
  {path:'servers' ,component:ServersComponent,children:[
    {path:':id' ,component: DisplayServerComponent },
    {path:':id/edit' ,component: EditServerComponent },
  
  ]},
  // customers
  {path:'customers' ,component:CustomersComponent,children:[
    {path:':id' ,component:DisplayCustomerComponent },
    {path:':id/edit' ,component: EditCustomerComponent },
  
  ]},
  {path:'not-found' ,component: PageNotFoundComponent,data:{message:'Error 404 Found.'} },
  
  {path:'**' , redirectTo: '/not-found' },
  
  
 
];





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BasicsComponent,
    DirectiveDemoComponent,
    BasicHighlightDirective,
    BetterHighlightDirective,
    TaskTwoComponent,
    TaskThreeComponent,
    UnlessDirective,
    AccountHomeComponent,
    AccountNewComponent,
    AccountDetailsComponent,
    TaskFiveComponent,
    ActiveUserComponent,
    InactiveUserComponent,
    ServersComponent,
    EditServerComponent,
    DisplayServerComponent,
    CustomersComponent,
    DisplayCustomerComponent,
    EditCustomerComponent,
    PageNotFoundComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  // providers: [AccountService],
  bootstrap: [AppComponent]
})
export class AppModule { }
