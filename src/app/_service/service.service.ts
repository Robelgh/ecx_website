import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, firstValueFrom } from 'rxjs';
import { environment } from '../../environment/environment';
import { Commodities } from '../_model/_commodities.model';

const baseUrl = `${environment.apiUrl}/ParentLookup/lan/0229b6bf-405a-470c-97bb-701df4ad0dab`;
const baseUrlPageCatagory = `${environment.apiUrl}/PageCatagory`;
const baseUrlPage = `${environment.apiUrl}/page`;

@Injectable({ providedIn: 'root' })
export class ServiceService {
  jsonDataResult: any;
  constructor(private http: HttpClient) {}

  async getParent() {
    return await firstValueFrom(this.http.get(baseUrl));
  }

  async getAllPageCatagories(id: string) {
    return await firstValueFrom(
      this.http.get(`${baseUrlPageCatagory}/parent/${id}`)
    );
  }

  async getAllPage(id: string) {
    return await firstValueFrom(
      this.http.get(`${baseUrlPage}/pageCatagory/${id}`)
    );
  }

  getById(id: string) {
    return this.http.get<Commodities>(`${baseUrl}/${id}`);
  }

  create(params: any) {
    return this.http.post(baseUrl, params);
  }

  update(id: string, params: any) {
    return this.http.put(`${baseUrl}/${id}`, params);
  }

  delete(id: string) {
    return this.http.delete(`${baseUrl}/${id}`);
  }
  getImagePath() {
    return 'https://localhost:7284/image/';
  }
}