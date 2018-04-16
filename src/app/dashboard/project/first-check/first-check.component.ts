import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSort, MatTableDataSource} from '@angular/material';
import {ProjectService} from '../../../shared/service/ProjectService';
import {Project} from '../../../shared/model/Project';

@Component({
  selector: 'app-first-check',
  templateUrl: './first-check.component.html',
  styleUrls: ['./first-check.component.css']
})
export class FirstCheckComponent implements OnInit {
  products: Project[];
  displayedColumns = ['name', 'rate', 'duration', 'amount', 'completed', 'operation'];
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
