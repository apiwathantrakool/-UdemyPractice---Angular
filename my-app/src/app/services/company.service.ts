import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Company } from '../company/company';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  constructor(private http: HttpClient) {
   }

  getAllCompanies(): Observable<Company[]> {
    return this.http.get<Company[]>('http://localhost:30082/admin/company/all');
  }
}
