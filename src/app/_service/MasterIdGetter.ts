import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, firstValueFrom } from 'rxjs';
import { environment } from '../../environment/environment';
import { Commodities } from '../_model/_commodities.model';

const lang= localStorage.getItem('langId')
const langName= localStorage.getItem('lang');

const baseUrl = `${environment.apiUrl}/ParentLookup/lan/${lang}`;
const baseUrlParent = `${environment.apiUrl}/ParentLookup/6c831f63-a1b3-48d8-851c-bea4aea61b84`;
const baseUrlBoard = `${environment.apiUrl}/BoardOfDirector`;

@Injectable({ providedIn: 'root' })
export class MasterIdGetter {
  jsonDataResult: any;

  constructor(private http: HttpClient) {}

  async getParent(params: string) {
    this.jsonDataResult = await firstValueFrom(this.http.get(baseUrl))

    console.log(this.jsonDataResult)
    
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
