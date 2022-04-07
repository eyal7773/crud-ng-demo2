import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CoursesComponent } from './components/courses/courses.component';
import { FormsModule } from '@angular/forms';
import { MenuComponent } from './components/menu/menu.component';

const appRoutes: Routes =[
  { path: '', component: LoginComponent},
  { path: 'login', component: LoginComponent},
  {path:'dashboard', component: DashboardComponent},
  {path:'courses', component: CoursesComponent},
];



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    CoursesComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
