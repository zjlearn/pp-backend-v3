import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSort, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-permission',
  templateUrl: './permission.component.html',
  styleUrls: ['./permission.component.css']
})
export class PermissionComponent implements OnInit {

  displayedColumns = ['id', 'name', 'desc', 'updateTime', 'status', 'action'];
  dataSource = new MatTableDataSource(PERMISSION_DATA);

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

// 角色相关的类描述
export interface Permission {
  id: number;
  name: string;
  desc: number;
  updateTime: String;
  status: string;
  action: string;
}

const PERMISSION_DATA: Permission[] = [
  {id: 1, name: 'Hydrogen', desc: '测试', updateTime: '2017-01-15', status: '/', action: '解锁'}
];

