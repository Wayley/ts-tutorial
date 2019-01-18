import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { NavComponent } from './nav/nav.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { CourseListComponent } from './views/course/course-list/course-list.component';
import { CourseEditComponent } from './views/course/course-edit/course-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    NavComponent,
    LoginComponent,
    CourseListComponent,
    CourseEditComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
