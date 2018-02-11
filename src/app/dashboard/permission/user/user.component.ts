import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginatorIntl, MatSort, MatTableDataSource, PageEvent} from '@angular/material';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  displayedColumns = ['id', 'name', 'email', 'firstLoginTime', 'lastLoginTime', 'role', 'status', 'action'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  length = 100;
  pageSize = 10;
  pageSizeOptions = [5, 10, 25, 100];

  // MatPaginator Output
  pageEvent: PageEvent;

  constructor(matPaginatorIntl: MatPaginatorIntl) {
    matPaginatorIntl.itemsPerPageLabel = '每页';
    matPaginatorIntl.previousPageLabel = '前一页';
    matPaginatorIntl.nextPageLabel = '下一页';
  }

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
  }

  @ViewChild(MatSort) sort: MatSort;

  ngOnInit(): void {
  }


  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  /**
   * Set the sort after the view init since this component will
   * be able to query its view for the initialized sort.
   */
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

}

export interface User {
  id: number;
  name: string;
  email: string;
  firstLoginTime: string;
  lastLoginTime: string;
  role: string;
  status: string;
  action: string;
}

const ELEMENT_DATA: User[] = [
  {id: 1, name: 'Hydrogen', email: 'xxx', firstLoginTime: 'H', lastLoginTime: '2017', role: '管理员', status: '/', action: '解锁'}
];
