import {HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  private baseUrl: string = environment.apiUrl

  get<T>(url: string) : Observable<T>{
    return this.call<T>("GET", url);
  }

  post<T>(url: string, data: any = null) : Observable<T> {
    return this.call<T>("POST", url, data);
  }

  put<T>(url: string, data?: any) : Observable<T>{
    return this.call<T>("PUT", url, data);
  }

  delete<T>(url: string, data?: any) : Observable<T> {
    return this.call<T>("DELETE", url, data);
  }

  private call<T>(method: string, url: string, data?: any, skipInterceptor: boolean = false) : Observable<T> {
    let headers: HttpHeaders = new HttpHeaders();
    if (skipInterceptor) {
      headers = headers.set('skipInterceptor', 'true');
    }
    return this.http.request<T>(method, this.baseUrl + url, {body: data, headers: headers});
  }
}
