import {
    HttpClient,
    HttpErrorResponse,
    HttpHeaders
  } from "@angular/common/http";
  import { Injectable } from "@angular/core";
  import { Observable, throwError } from "rxjs";
  import { catchError } from "rxjs/operators";
  import { environment } from "src/environments/environment";
  import { Bus } from "./bus";
  

  Injectable({
    providedIn: "root"
  })
  export class BusService {
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
      id: number 
    ) {
      const url = `${environment.busServiceBaseUrl}/buses/${id}`;
      return this.get<Bus>(url);
    }
  
    findAll() {
      const url = `${environment.busServiceBaseUrl}/buses`;
      return this.get<Bus[]>(url);
    }
  
    update(bus: Bus) {
      const url = `${environment.busServiceBaseUrl}/bus/${bus.id}`;
      return this.put(url, {
        name: bus.name,
        age: bus.age,
        salary: bus.salary
      });
    }
    create(bus: Bus) {
      const url = `${environment.busServiceBaseUrl}/employees`;
      return this.post(url, {
        name: bus.name,
        age: bus.age,
        salary: bus.salary
      });
    }
  }
  