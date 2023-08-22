import { Observable, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { iProduct } from '../interfaces/Product';

const baseUrl =
  'https://tribu-ti-staffing-desarrollo-afangwbmcrhucqfh.z01.azurefd.net/ipf-msa-productosfinancieros/bp/products';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<iProduct[]> {
    return this.http.get<iProduct[]>(baseUrl);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(data: any): Observable<any> {
    return this.http.put(baseUrl, data);
  }

  delete(id: any): Observable<any> {
    const params = new HttpParams().set('id', id);
    return this.http.delete(baseUrl, { params });
  }

  existProduct(id: string, data: any): Observable<any> {
    const params = new HttpParams().set('id', id);
    return this.http.delete(`${baseUrl}/verification`, { params });
  }

  handleError(error: HttpErrorResponse) {
    console.error(`Error ${error.status}`, error.error);
    return throwError(() => new Error('Algo malo ocurrio, intentalo más tarde'));
  }
}
