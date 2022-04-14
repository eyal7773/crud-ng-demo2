import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private _client:HttpClient) {


   }

   login(email:string, password:string) {
     
    

    let httpOptions = {
       params: {
         email ,
         password
       },
       headers: {
         koko: 'moko'

       }
     }

     return this._client.get( 'http://localhost:3000/users',httpOptions )
   }

   public isAuthenticated() : boolean {
     const email = localStorage.getItem('EMAIL');

     return (email !== null);
   }






}
