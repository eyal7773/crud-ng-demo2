import { Injectable } from '@angular/core';
import { Course } from '../interfaces/Course';


@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  courses:Course[] = [];

  constructor() { 
    this.courses = [
      {id :1, name:'Course1', desc:'fdfddf', isActive:true, price:100, updatedAt: new Date('2022-04-07')},
      {id :2, name:'Course2', desc:'dkshfkjhk', isActive:false, price:200, updatedAt: new Date('2022-04-07')},
    ];

  }


  getCourses() :Course[] {
    return this.courses;
  }
}
