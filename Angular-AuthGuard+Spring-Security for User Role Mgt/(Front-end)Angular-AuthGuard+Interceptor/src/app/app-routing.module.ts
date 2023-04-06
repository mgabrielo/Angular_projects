import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthGuardGuard } from './the_auth/auth-guard.guard';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {path: 'home', component:HomeComponent},
  {path: 'admin', component:AdminComponent, canActivate:[AuthGuardGuard], data:{roles:['Admin']}},
  {path: 'user', component:UserComponent, canActivate:[AuthGuardGuard], data:{roles:['User']}},
  {path: 'login', component:LoginComponent},
  {path: 'forbidden', component:ForbiddenComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
