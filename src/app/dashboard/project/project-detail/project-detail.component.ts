///<reference path="../../../../../node_modules/@angular/core/src/metadata/directives.d.ts"/>
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProjectService} from '../../../shared/service/ProjectService';
import {Project} from '../../../shared/model/Project';
import {MatDialog} from '@angular/material';
import {DialogImageComponent} from '../../../shared/dialog-image/dialog-image.component';


@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
// 项目详情信息
export class ProjectDetailComponent implements OnInit {

  project: Project;

  constructor(private route: ActivatedRoute,
              private projectService: ProjectService,
              public dialog: MatDialog) {
  }

  ngOnInit() {
    this.getProject();
  }

  getProject(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.projectService.getProject(id)
      .subscribe(project => this.project = project);
  }


  openDialog(): void {
    console.log('打开dialog')
    const dialogRef = this.dialog.open(DialogImageComponent, {
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
