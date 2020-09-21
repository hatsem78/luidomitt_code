import { environment } from "./../../../environments/environment";
import { AppComponent } from "./../../app.component";
import { Driver } from "./../driver";
import { Injectable } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})

/**
 * Rest-api backend con el cual interactua, dependindo si es prod o local
 * la variable baseUrl se carga denamicamente, al ser local ejecuta un rest-api mock
 */
export class DriverService {
  private baseUrl = environment.apiURL;

  constructor(private http: HttpClient) {}

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
