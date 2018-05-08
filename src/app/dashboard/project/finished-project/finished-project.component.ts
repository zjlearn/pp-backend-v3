import {Component, OnInit, ViewChild} from '@angular/core';
import {ProjectService} from '../../../shared/service/ProjectService';
import {MatSort, MatTableDataSource} from '@angular/material';
import {Project} from '../../../shared/model/Project';

@Component({
  selector: 'app-finished-project',
  templateUrl: './finished-project.component.html',
  styleUrls: ['./finished-project.component.css']
})
export class FinishedProjectComponent implements OnInit {

  products: Project[];
  displayedColumns = ['id', 'projectNo', 'userName', 'amount', 'duration', 'createTime',  'operation'];
  dataSource;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private  projectService: ProjectService) { }

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
