import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserAuthService } from './user-auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {


   request_header= new HttpHeaders(
    {"No-Auth": "True",}
    );

  constructor(private http:HttpClient, private userAuthService: UserAuthService) {
   }
   
   public login(loginData: any){
      return this.http.post<any>("http://localhost:8080/api/v1/auth/authenticate", loginData,
       {headers: this.request_header});
   }

   public roleMatch(allowedRoles:any): boolean{
      let isMatch = false;

     const userRoles:any = this.userAuthService.getRoles();

     if(userRoles != null && userRoles){
      for(let i=0; i < userRoles.length; i++){
          for(let j = 0; j< allowedRoles.length; j++){

            if(userRoles[i].roleName === allowedRoles[j]){
              isMatch =true;
              
            }else{
              isMatch =false;
            }
          }
      }
     }
     return isMatch;
   }
}
