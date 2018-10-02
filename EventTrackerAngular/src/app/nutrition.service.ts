import { Injectable } from '@angular/core';
import { Nutrition } from './models/nutrition';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NutritionService {
  private baseUrl = 'http://localhost:8082/';
  private uriPath = 'api/nutrition';
  private url = this.baseUrl + this.uriPath;

  constructor(private http: HttpClient) { }

  index() {
    return this.http.get<Nutrition[]>(this.url)
    .pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError('error retrieving nutrition object ' + err.status);
      })
      );
  }

  create(nutrition: Nutrition) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
  return this.http.post<any>(this.url, nutrition, httpOptions)
  .pipe(catchError((err: any) => {
    console.log(err);
    return throwError(err.status);
  }));
  }

  update (nutrition: Nutrition, nutritionId: number) {
    console.log(nutrition);
    return this.http.put(this.url + '/' + nutritionId, nutrition).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError(err.status);
      }));
  }

  destroy(id: number) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.delete<any>(this.url + '/' + id, httpOptions)
    .pipe(catchError((err: any) => {
      console.log(err);
      return throwError(err.status);
    }));
  }
}
