import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  private readonly EMAIL_KEY = 'EMAIL';
  /** האם הבנאדם מזוהה */
  isAuthenticated:boolean = false;

  constructor(private _router:Router,
              private _usersService:UsersService ) {
   }

  ngOnInit(): void {
  }

  onLogin(value:any):void {
    console.log('form values:',value);
    this.isAuthenticated = true;

    this._usersService.login(value.email, value.password)
                      .subscribe(  
                        
                        (response:any) => {
                          
                          if (response && response[0]  && response[0].id ) {
                            this.isAuthenticated = true;
                            localStorage.setItem(this.EMAIL_KEY,value.email);
                            this._router.navigate(['dashboard'])
                          } 
                          else 
                          {
                            localStorage.clear();
                            this.isAuthenticated = false;
                            throw new Error('not authenciated')
                          }
                      } 
                     
                      )    
                      





    // if (value.email === "abc@gmail.com" 
    //     && value.password === "a12345" ) 
    //     {
    //       this.isAuthenticated = true;
    //       localStorage.setItem(this.EMAIL_KEY,value.email);
    //       this._router.navigate(['dashboard'])
    //       /*
    //         לשמור את העובדה שהבנאדם נכנס
    //         להעביר את המשתמש למסך הראשון שמותר לו
    //       */
    //     }   else {
    //       this.isAuthenticated = false;
    //     }

  }

}
