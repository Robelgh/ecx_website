import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, firstValueFrom } from 'rxjs';
import { environment } from '../../environment/environment';
import { Commodities } from '../_model/_commodities.model';

const baseUrl = `${environment.apiUrl}/ParentLookup/6c831f63-a1b3-48d8-851c-bea4aea61b84`;
const baseUrlParent = `${environment.apiUrl}/ParentLookup/6c831f63-a1b3-48d8-851c-bea4aea61b84`;
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