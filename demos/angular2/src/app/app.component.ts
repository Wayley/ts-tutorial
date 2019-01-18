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
  navList: Nav[] = [];
  constructor(private navService: NavService) {}

  getNavList(): void {
    this.navList = this.navService.getNavList();
  }

  ngOnInit() {
    this.getNavList();
  }
}
