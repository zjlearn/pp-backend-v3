import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProjectService} from '../../../shared/service/ProjectService';


@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
// 项目详情信息
export class ProjectDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private projectService: ProjectService,
              private location: Location) {
  }

  ngOnInit() {
  }

  getProject(): void {
    const id = this.route.snapshot.paramMap.get('id');
    // this.projectService.get(id)
    //   .subscribe(hero => this.hero = hero);
  }

}
