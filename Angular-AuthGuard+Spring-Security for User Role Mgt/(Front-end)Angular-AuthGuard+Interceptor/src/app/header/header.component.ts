import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserAuthService } from '../the_services/user-auth.service';
import { UserService } from '../the_services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {

  public  x = 0;

  constructor(private userAuthService: UserAuthService, private router:Router,
    public userService:UserService){}
  ngOnInit(): void {
     
  }

  public isLoggedIn(){
    
    this.x+=1;
    this.userAuthService.isLoggedIn(); 
    this.router.navigate(['/login'])
  }

  public LogOut(){
    this.x-=1;
    this.userAuthService.clear();
     
    this.router.navigate(['/home'])
  }

  
}
