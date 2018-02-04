import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSort, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  displayedColumns = ['id', 'name', 'email', 'firstLoginTime', 'lastLoginTime', 'role', 'status', 'action'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatSort) sort: MatSort;

  ngOnInit(): void {
  }

  /**
   * Set the sort after the view init since this component will
   * be able to query its view for the initialized sort.
   */
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
}

export interface User {
  id: number;
  name: string;
  email: number;
  firstLoginTime: number;
  lastLoginTime: string;
  role: string;
  status: string;
  action: string;
}

const ELEMENT_DATA: User[] = [
  {id: 1, name: 'Hydrogen', email: 1.0079, firstLoginTime: 'H', lastLoginTime: '2017', role: '管理员', status: '/', action: '解锁'}
];
