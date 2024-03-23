import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, firstValueFrom } from 'rxjs';

import { environment } from '../../environment/environment';

// import { Agricultural } from '../_model/agricultural';

const baseUrl2 = `assets/json/marketdata.json`;
const baseUrl = `${environment.apiUrl}/MarketData/scrollingdata`;

@Injectable({ providedIn: 'root' })
export class MarketDatatService {
    constructor(private http: HttpClient) {  }

      

    async GetScrollingData() {
        // let response= await firstValueFrom(this.http.get<any>(baseUrl));
        // return [...new Set(response)]
          return await firstValueFrom(this.http.get(baseUrl));
       
    }

    async GetRealtimeData() {
          return await firstValueFrom(this.http.get(`${baseUrl}/${"realtimedata"}`));
       
    }

    

    async getAll() {
        let response= await firstValueFrom(this.http.get<any>(baseUrl2));
        return [...new Set(response)]
        //   return await firstValueFrom(this.http.get(baseUrl));
       
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