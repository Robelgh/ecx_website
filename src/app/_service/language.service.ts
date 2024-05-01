import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, firstValueFrom } from 'rxjs';
import { environment } from '../../environment/environment';
import { Commodities } from '../_model/_commodities.model';

const baseUrl = `${environment.apiUrl}/Language`;


@Injectable({ providedIn: 'root' })
export class LanguageService {
  jsonDataResult: any;
  constructor(private http: HttpClient) {}


  async getLanguage() {
    return await firstValueFrom(this.http.get(baseUrl));
  }
}
