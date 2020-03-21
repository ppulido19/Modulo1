import {
    HttpClient,
    HttpErrorResponse,
    HttpHeaders
  } from "@angular/common/http";
  import { Injectable } from "@angular/core";
  import { Observable, throwError } from "rxjs";
  import { catchError } from "rxjs/operators";
  import { environment } from "src/environments/environment";
  import { Route } from "./route";
  
  @Injectable({
    providedIn: "root"
  })
  export class RouteService {
    constructor(private http: HttpClient) {}
  
    private handleError(error: HttpErrorResponse): Observable<any> {
      console.log(error);
      return throwError("An error has occurred");
    }
  
    private get<T>(url): Observable<T> {
      console.log("get:", url);
      return this.http
        .get<T>(url, {
          headers: new HttpHeaders({
            "Content-Type": "application/json",
            "Accept": "application/json"
          })
        })
        .pipe(
          // retry(5),
          catchError(this.handleError)
        );
    }
  
    private post<T>(url, data: T): Observable<T> {
      console.log("post:", url);
      return this.http
        .post<T>(url, data, {
          headers: new HttpHeaders({
            "Content-Type": "application/json"
          })
        })
        .pipe(
          // retry(5),
          catchError(this.handleError)
        );
    }
    private put<T>(url, data: T): Observable<T> {
      console.log("put:", url);
      return this.http.put<T>(url, data).pipe(
        // retry(5),
        catchError(this.handleError)
      );
    }
  
    findById(
      id: number // : Observable<Route>
    ) {
      const url = `${environment.transmilenioServiceBaseUrl}/routes/${id}`;
      return this.get<Route>(url);
    }
  
    findAll() {
      const url = `${environment.transmilenioServiceBaseUrl}/routes`;
      return this.get<Route[]>(url);
    }
  
    update(route: Route) {
      const url = `${environment.transmilenioServiceBaseUrl}/routes/${route.id}`;
      return this.put(url, {
        code: route.code,
        stations: route.stations,
        schedule: route.schedule
      });
    }
    create(route: Route) {
      const url = `${environment.transmilenioServiceBaseUrl}/routes`;
      return this.post(url, {
        code: route.code,
        stations: route.stations,
        schedule: route.schedule
      });
    }
  }