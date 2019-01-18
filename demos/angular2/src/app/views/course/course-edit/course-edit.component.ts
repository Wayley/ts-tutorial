import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { CourseService } from '../../../course.service';

@Component({
  selector: 'app-course-edit',
  templateUrl: './course-edit.component.html',
  styleUrls: ['./course-edit.component.css']
})
export class CourseEditComponent implements OnInit {
  courseDetail = {};
  constructor(
    private route: ActivatedRoute, // 当前实例的路由信息
    private location: Location, // 浏览器相关的对象
    private courseService: CourseService
  ) {}

  ngOnInit() {
    console.log('ngOnInit', this.route.snapshot.paramMap.get('id'));

    this.getCourseDetailById();
  }

  //
  getCourseDetailById(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    // route.snapshot路由信息快照
    // paramMap参数字典
    // (+)操作符会把字符串转为数字
    this.courseDetail = this.courseService.getCourseDetailById(id);
  }
  goBack(): void {
    this.location.back();
  }
}
