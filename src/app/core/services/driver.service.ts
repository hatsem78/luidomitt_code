import { Driver } from "./../driver";
import { Injectable } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
@Injectable({
  providedIn: "root",
})
export class DriverService {
  private baseUrl = "http://localhost:8080/springboot-crud-rest/api/v1/drivers";
  private driver_local = [];

  constructor(private http: HttpClient) {
    this.driver_local = [];
  }

  getDriver(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createDriver(driver: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, driver);
  }

  updateDriver(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteDriver(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: "text" });
  }

  getDriversList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
