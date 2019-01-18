import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { CourseListComponent } from './views/course/course-list/course-list.component';
import { CourseEditComponent } from './views/course/course-edit/course-edit.component';

const routes: Routes = [
  { path: 'course/list', component: CourseListComponent },
  { path: 'course/:id', component: CourseEditComponent }
];

@NgModule({
  declarations: [],
  // imports: [CommonModule],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
