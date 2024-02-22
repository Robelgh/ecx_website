import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, firstValueFrom } from 'rxjs';
import { environment } from '../../../environment/environment';
import { Commodities } from '../../_model/_commodities.model';

const baseUrl = `${environment.apiUrl}/Page/37eb5e98-afca-41ca-8d47-cd7b7ab70cfe/47a13561-cf8e-474d-ae49-c5aa65205158`;
const baseUrlParent = `${environment.apiUrl}/PageCatagory/37eb5e98-afca-41ca-8d47-cd7b7ab70cfe`;
const baseUrlParentService = `assets/json/warehouseservice.json`;

@Injectable({ providedIn: 'root' })
export class ServiceService {
  jsonDataResult: any;
  constructor(private http: HttpClient) {}

  async getParent() {
    return await firstValueFrom(this.http.get(baseUrlParent));
  }

  async getAll() {
    return await firstValueFrom(this.http.get(baseUrl));
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
  async getParentService(parent: string) {
    this.jsonDataResult = await firstValueFrom(
      this.http.get(baseUrlParentService)
    );
    return this.jsonDataResult;
  }

  async getParentServiceById(id: any) {
    this.jsonDataResult = await firstValueFrom(
      this.http.get(baseUrlParentService)
    );
    return this.jsonDataResult
      ? this.jsonDataResult.filter((item: any) => item.id == id)
      : null;
  }
}
