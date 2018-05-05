import {Component, OnInit, ViewChild} from '@angular/core';
import {Project} from '../../../shared/model/Project';
import {ProjectService} from '../../../shared/service/ProjectService';
import {MatSort, MatTableDataSource} from '@angular/material';

/**
 * 对借款申请进行管理
 */
@Component({
  selector: 'app-loan-apply',
  templateUrl: './loan-apply.component.html',
  styleUrls: ['./loan-apply.component.css']
})
export class LoanApplyComponent implements OnInit {
  products: Project[];
  displayedColumns = ['id', 'userName', 'amount', 'duration', 'createTime', 'reason', 'Integrity', 'operation'];
  dataSource;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private  projectService: ProjectService) {
  }

  ngOnInit() {
    this.products = this.projectService.getProjects();
    this.dataSource = new MatTableDataSource(this.products);
  }


  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

}
