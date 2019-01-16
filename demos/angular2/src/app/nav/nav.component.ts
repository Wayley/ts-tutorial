import { Component, OnInit } from '@angular/core';
// @Component 是个装饰器函数，用于为该组件指定 Angular 所需的元数据。
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  navList = [
    { id: 1, name: '学习管理' },
    { id: 2, name: '用户管理' },
    { id: 3, name: '统计管理' },
    { id: 4, name: '系统管理' }
  ];
  tittle = 'Manage';
  constructor() {}

  ngOnInit() {}
}
