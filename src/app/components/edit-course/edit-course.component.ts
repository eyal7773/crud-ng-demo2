import { Component, OnInit } from '@angular/core';
import { CoursesService } from 'src/app/services/courses.service';
import { Course } from 'src/app/interfaces/Course';
import { ActivatedRoute, Params, Router } from '@angular/router';


@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.css']
})
export class EditCourseComponent implements OnInit {

  course:Course = {} as Course;
  id:number = 0;

  constructor(private courseService:CoursesService,
             private activatedRoute:ActivatedRoute,
             private router:Router) { 

              this.activatedRoute.params.subscribe( (params:Params) => {

                  this.id = params['id'];
              })

             /***
              * SOME BIG OBSERVABLE
              * הוא דואג לכל הקריאות לשרת
              * 
              *  */ 
  }

  ngOnInit(): void {
    this.courseService.getSingleCourse(this.id)
                      .subscribe( (response:any ) => {
                        this.course = response;
                        console.log(this.course);
                      })
  }

  onSubmit(form:any) {
    this.courseService
        .updateCourse(this.id, this.course)
        .subscribe( {
          next: (response:any) => {
                  this.router.navigate(['courses']);
                },
          error: (err:any) => console.log('err'),
          complete: () => console.log('complete')

          
        });
          
          
          
        // .subscribe( (response:any) => {
        //   this.router.navigate(['courses']);
        // })
  }

}
