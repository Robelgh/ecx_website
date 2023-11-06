import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, firstValueFrom } from 'rxjs';
import { environment } from '../../environment/environment';
import { Commodities } from '../_model/_commodities.model';

const baseUrl = `${environment.apiUrl}/Page/1150b2c8-82f4-4153-82c2-1a21e7fed01d/3eab9014-4e33-4d8b-a313-fa745837c157`;
const baseUrlParent = `${environment.apiUrl}/PageCatagory/1150b2c8-82f4-4153-82c2-1a21e7fed01d`;
const baseUrlBoard=`${environment.apiUrl}/BoardOfDirector`

@Injectable({ providedIn: 'root' })
export class AboutService {
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
    
    async getBoardofDiroctories(){
          return await firstValueFrom(this.http.get(baseUrlBoard));
      }  
 
}