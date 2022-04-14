import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

export interface MenuItem {
  title:string;
  link:string;
}


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  items:MenuItem[] = [];

  constructor(private router:Router,
              public _usersService:UsersService) {

    this.setMenuItems();

   }

  ngOnInit(): void {
  }

  setMenuItems() {
    this.items.push({title:'Home', link:'dashboard'});
    this.items.push({title:'Courses', link:'courses'});
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['login'])
  }



}
