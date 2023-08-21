import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environment/environment';
import { Commodities } from '../_model/_commodities.model';

const baseUrl = `${environment.apiUrl}/commodities`;

@Injectable({ providedIn: 'root' })
export class CommoditiesService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<Commodities[]>(baseUrl);
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
}