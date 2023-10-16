import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, firstValueFrom } from 'rxjs';
import { environment } from '../../environment/environment';
import { Commodities } from '../_model/_commodities.model';

const baseUrl = `${environment.apiUrl}/Page/4b449a73-70e2-471e-827b-d7a320c55701/3eab9014-4e33-4d8b-a313-fa745837c157`;
const baseUrlParent = `${environment.apiUrl}/PageCatagory/4b449a73-70e2-471e-827b-d7a320c55701`;

@Injectable({ providedIn: 'root' })
export class ServiceService {
    constructor(private http: HttpClient) { }

    async getParent()
    {
        return await firstValueFrom(this.http.get(baseUrlParent));
    }

   async  getAll() {
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
    getImagePath(){
        return 'https://localhost:7284/image/';
      }
}