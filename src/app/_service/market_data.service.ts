import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, firstValueFrom } from 'rxjs';

import { environment } from '../../environment/environment';

// import { Agricultural } from '../_model/agricultural';

const baseUrl = `${environment.apiUrl}/NonAgricultural`;

@Injectable({ providedIn: 'root' })
export class MarketDataComponentService {
    constructor(private http: HttpClient) {  }

    async getAll() {
        return await firstValueFrom(this.http.get<any>(baseUrl));
        //   return await firstValueFrom(this.http.get('https://jsonplaceholder.typicode.com/users'));
        // return this.httpClient.get(baseUrl);
    }

    getById(id: string) {
        return this.http.get<any>(`${baseUrl}/${id}`);
     }

    create(params: any) {
        console.log(params)
        return this.http.post(baseUrl, params);
    }

    update(id: string, params: any) {
        return this.http.put(`${baseUrl}/${id}`, params);
    }

   async delete(id: string) {
        return await firstValueFrom(this.http.delete(`${baseUrl}/${id}`));
    }
}