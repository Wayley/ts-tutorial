import { Component } from '@angular/core';

import { NavService } from './nav.service';
import { Nav } from './types/nav';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '管理系统';
  navList = [
    { id: 1, name: '用户管理' },
    { id: 2, name: '学习管理' },
    { id: 3, name: '统计管理' },
    { id: 4, name: '系统管理' }
  ];

  navList_: Nav[] = [];
  constructor(private navService: NavService) {}

  getNavList(): void {
    this.navList_ = this.navService.getNavList();
    console.log(this.navList_, '-----------');
  }

  ngOnInit() {
    this.getNavList();
  }
}
