import {
    HttpClient,
    HttpErrorResponse,
    HttpHeaders
  } from "@angular/common/http";
  import { Injectable } from "@angular/core";
  import { Observable, throwError } from "rxjs";
  import { catchError } from "rxjs/operators";
  import { environment } from "src/environments/environment";
  import { Schedule } from "./Schedule";
  
  @Injectable({
    providedIn: "root"
  })
  export class ScheduleService {
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
      id: number // : Observable<Employee>
    ) {
      const url = `${environment.transmilenioServiceBaseUrl}/schedules/${id}`;
      return this.get<Schedule>(url);
    }
  
    findAll() {
      const url = `${environment.transmilenioServiceBaseUrl}/schedules`;
      return this.get<Schedule[]>(url);
    }
  
    update(schedule: Schedule) {
      const url = `${environment.transmilenioServiceBaseUrl}/schedules/${schedule.id}`;
      return this.put(url, {
        //name: schedule.code,
        //age: schedule.stations,
       
      });
    }
    create(schedule: Schedule) {
      const url = `${environment.transmilenioServiceBaseUrl}/schedules`;
      return this.post(url, {
        //name: schedule.code,
        //age: schedule.stations,
      });
    }
  }