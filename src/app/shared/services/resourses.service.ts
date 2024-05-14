import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable, map, tap } from 'rxjs';
import { ResourceModel } from '../model/resource.model';

export abstract class ResoursesService<T extends ResourceModel<T>> {
  customHeaders: HttpHeaders = new HttpHeaders({});
  constructor(
    private httpClient: HttpClient,
    private tConstructor: new (m: Partial<T>, ...args: unknown[]) => T,
    protected url: string
  ) {}

  public getAll(): Observable<T[]> {
    return this.httpClient.get<T[]>(`${this.url}`).pipe(
      tap((x) => console.log('ResoursesService-1=', x)),
      map((result) => result.map((i) => new this.tConstructor(i))),
      tap((x) => console.log('ResoursesService-2=', x))
    );
  }

  public getOne(): Observable<T> {
    return this.httpClient.get<T>(`${this.url}`).pipe(
      map((result) => new this.tConstructor(result)),
      tap(console.log)
    );
  }

  public getById(id: number): Observable<T> {
    return this.httpClient.get<T>(`${this.url}/${id}`).pipe(
      map((result) => new this.tConstructor(result)),
      tap(console.log)
    );
  }

  public create(
    resource: Partial<T> & { toJson: () => T }
  ): Observable<HttpResponse<T>> {
    return this.httpClient
      .post<T>(`${this.url}`, resource.toJson(), {
        responseType: 'json',
        observe: 'response',
        headers: this.customHeaders,
      })
      .pipe(
        map((result) => new this.tConstructor(result.body!)),
        tap(console.log)
      );
  }

  public update(resource: Partial<T> & { toJson: () => T }): Observable<T> {
    return this.httpClient
      .put<T>(`${this.url}/${resource._id}`, resource.toJson())
      .pipe(
        map((result) => new this.tConstructor(result)),
        tap(console.log)
      );
  }

  public delete(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.url}/${id}`);
  }
}
