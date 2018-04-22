///<reference path="../model/Project.ts"/>
import {Injectable} from '@angular/core';
import {Project} from '../model/Project';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ProjectService {

  public projects: Project [];

  constructor(private http: HttpClient) {

  }

  getProjects(): Project[] {
    return projects;
  }

  getProject(id: number): Observable<Project> {
    return null;
  }

  getProjectsByCond(type: number, status: number, durationLowBound: number, durationUpBound: number,
                    pageIndex: number, pageSize: number): Project[] {
    return null;
  }


}

const projects = [new Project(1, 'No2', '贷款', 1, 1, 1)];
