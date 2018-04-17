import {Injectable} from '@angular/core';
import {Project} from '../model/Project';
import {HttpClient} from '@angular/common/http';
import {Result} from '../model/Result';

@Injectable()
export class ProjectService {

  public projects: Project [];

  constructor(private http: HttpClient) {

  }

  getProjects(): Project[] {
    return this.http.get<Result>('http://localhost:4200/xhr/user/currentUser').map<Result, User>(result => result.data);
  }

  getProjectsByCond(type: number, status: number, durationLowBound: number, durationUpBound: number,
                    pageIndex: number, pageSize: number): Project[] {
    return null;
  }
}


