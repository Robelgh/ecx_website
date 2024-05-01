import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable,BehaviorSubject, firstValueFrom } from 'rxjs';

import { MasterIdGetter } from './MasterIdGetter'; 

import { environment } from '../../environment/environment';
import { Commodities } from '../_model/_commodities.model';

const lang= localStorage.getItem('langId')
const baseUrl = `${environment.apiUrl}/Vacancy`;
const baseUrlPageCatagory = `${environment.apiUrl}/PageCatagory`;
const baseUrlPage = `${environment.apiUrl}/page`;

@Injectable({ providedIn: 'root' })
export class CareerService {

  constructor(private http: HttpClient,private masterIdGetter: MasterIdGetter) {}

  async getVaccancies() {
    return await firstValueFrom(this.http.get(baseUrl));
  }

  async getAllPageCatagories(id: string) {
    return await firstValueFrom(this.http.get(`${baseUrlPageCatagory}/parent/${id}`));
  }

  getImagePath() {
    return 'https://localhost:7284/image/';
  }



}
