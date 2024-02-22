import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, firstValueFrom } from 'rxjs';
import { environment } from '../../../environment/environment';
import { Commodities } from '../../_model/_commodities.model';

const baseUrl = `${environment.apiUrl}/Page/65eef741-b3c0-429f-a57f-3aad247f85a2/47a13561-cf8e-474d-ae49-c5aa65205158`;
const baseUrlParent = `${environment.apiUrl}/PageCatagory/65eef741-b3c0-429f-a57f-3aad247f85a2`;
const baseUrlBoard = `${environment.apiUrl}/BoardOfDirector`;

@Injectable({ providedIn: 'root' })

export class TradeSettlementService {
  constructor(private http: HttpClient) {}

  async getParent() {
    return await firstValueFrom(this.http.get(baseUrlParent));
  }

  async getAll() {
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
  getImagePath() {
    return 'https://localhost:7284/image/';
  }

  async getBoardofDiroctories() {
    return await firstValueFrom(this.http.get(baseUrlBoard));
  }
}
