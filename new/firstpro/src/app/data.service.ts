import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }


 getData(): Observable<any> {
    return this.http.get(' http://localhost:3000/courses');
 }
 getCarousel(): Observable<any> {
  return this.http.get('  http://localhost:3000/carousel-data');
 }

}