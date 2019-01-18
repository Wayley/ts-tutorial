import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavService {
  constructor() {}
  getNavList() {
    const list = [
      { id: 111, name: 'mock用户管理' },
      { id: 222, name: 'mock学习管理' },
      { id: 333, name: 'mock统计管理' },
      { id: 444, name: 'mock系统管理' }
    ];
    return list;
  }
}
