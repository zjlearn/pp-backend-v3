import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProjectService} from '../../../shared/service/ProjectService';
import {Project} from '../../../shared/model/Project';



@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
// 项目详情信息
export class ProjectDetailComponent implements OnInit {

  project: Project;

  constructor(private route: ActivatedRoute,
              private projectService: ProjectService) {
  }

  ngOnInit() {
    this.getProject();
  }

  getProject(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.projectService.getProject(id)
      .subscribe(project => this.project = project);
  }
}
