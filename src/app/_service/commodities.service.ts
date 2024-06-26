import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { environment } from '../../environment/environment';
import { Commodities } from '../_model/_commodities.model';

const baseUrl = `${environment.apiUrl}/Commodity`;
const baseUrlContract = `${environment.apiUrl}/ContractFile/commodity`;

@Injectable({ providedIn: 'root' })
export class CommoditiesService {
    constructor(private http: HttpClient) { }

    async getAll() {
        return await firstValueFrom(this.http.get(baseUrl));
    }

    async getContract(id:any)
    {
        return await firstValueFrom(this.http.get(`${baseUrlContract}/${id}`));
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

    getImagePath(){
        return 'https://localhost:7284/image/';
      }
}