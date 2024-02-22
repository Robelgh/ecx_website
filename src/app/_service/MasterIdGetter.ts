import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, firstValueFrom } from 'rxjs';
import { environment } from '../../environment/environment';
import { Commodities } from '../_model/_commodities.model';

const baseUrl = `${environment.apiUrl}/ParentLookup`;
const baseUrlParent = `${environment.apiUrl}/ParentLookup/6c831f63-a1b3-48d8-851c-bea4aea61b84`;
const baseUrlBoard = `${environment.apiUrl}/BoardOfDirector`;

@Injectable({ providedIn: 'root' })
export class MasterIdGetter {
  jsonDataResult: any;

  constructor(private http: HttpClient) {}

  async getParentId(params: string) {
    this.jsonDataResult = await firstValueFrom(this.http.get(baseUrl))
    
     return this.jsonDataResult.data.filter(
        (x: any) =>
          x.title.toString().toUpperCase().indexOf(params.toUpperCase()) > -1
      )
    
  }

  async getCatagoryId(params: string) {
    return await firstValueFrom(this.http.get(baseUrl));
  }

  // getPageId(params : string) {
  //     return this.http.get<Commodities>(`${baseUrl}/${id}`);
  // }
}
