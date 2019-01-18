import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  constructor() {}
  // 获取course列表
  getCourseList() {
    return [{ id: 1, name: '大学计算机基础' }, { id: 2, name: '线性代数' }];
  }
  // 获取详情
  getCourseDetailById(id: number) {
    const detail = {
      id,
      name: `id为${id}的课程`
    };
    return detail;
  }
}
