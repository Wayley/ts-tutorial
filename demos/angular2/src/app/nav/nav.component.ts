import { Component, OnInit, Input } from '@angular/core';
// @Component 是个装饰器函数，用于为该组件指定 Angular 所需的元数据。
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  @Input() list;
  tittle = 'Manage';

  constructor() {}

  ngOnInit() {
    console.log('Nav OnInit');
  }
}
