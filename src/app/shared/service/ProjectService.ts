///<reference path="../model/Project.ts"/>
import {Injectable} from '@angular/core';
import {Project} from '../model/Project';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Result} from '../model/Result';

@Injectable()
export class ProjectService {

  public projects: Project [];

  constructor(private http: HttpClient) {

  }

  getProjects(): Project[] {
    return mockProjects;
  }

  getProject(id: number) {
    return this.http.get<Result>('http://localhost:4200/xhr/user/login').map<Result, Project>(ret => ret.data);
  }

  getProjectsByCond(type: number, status: number, durationLowBound: number, durationUpBound: number,
                    pageIndex: number, pageSize: number): Project[] {
    return null;
  }
}

const mockProjects = [
  new Project(1, 'zj', '信用贷', 'pxssf342', 432543, 12, 3242342)
];
