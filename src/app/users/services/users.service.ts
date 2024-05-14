import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { ResoursesService } from 'src/app/shared/services/resourses.service';
import { URL_BACKEND } from '../../shared/constants/url-endpoints';
import { UserModel } from '../model/user.model';

@Injectable({
  providedIn: 'root',
})
export class UsersService extends ResoursesService<UserModel> {
  constructor(private http: HttpClient) {
    super(http, UserModel, URL_BACKEND['USERS']);
  }

  public getUsers(): Observable<UserModel[]> {
    return this.getAll().pipe(
      map((res: UserModel[]) => {
        return res;
      })
    );
  }

  public createUser(data: UserModel): Observable<HttpResponse<UserModel>> {
    return this.create(data);
  }
}
