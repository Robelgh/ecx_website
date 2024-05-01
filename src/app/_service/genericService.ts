import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable,BehaviorSubject, firstValueFrom } from 'rxjs';

import { MasterIdGetter } from './MasterIdGetter'; 

import { environment } from '../../environment/environment';
import { Commodities } from '../_model/_commodities.model';

const lang= localStorage.getItem('langId')
const baseUrl = `${environment.apiUrl}/ParentLookup/lan/${lang}`;
const baseUrlPageCatagory = `${environment.apiUrl}/PageCatagory`;
const baseUrlPage = `${environment.apiUrl}/page`;

@Injectable({ providedIn: 'root' })
export class GenericService {
  // private AboutCatagories= any[];

  private sharedDataSubject = new BehaviorSubject<any>('Initial Data'); // Initial value
  sharedData = this.sharedDataSubject.asObservable();
  constructor(private http: HttpClient,private masterIdGetter: MasterIdGetter) {}

  async getParent() {
    return await firstValueFrom(this.http.get(baseUrl));
  }

  async getAllPageCatagories(id: string) {
    return await firstValueFrom(this.http.get(`${baseUrlPageCatagory}/parent/${id}`));
  }

  async getAllPage(id: string) {
    return await firstValueFrom(this.http.get(`${baseUrlPage}/pageCatagory/${id}`));
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

   setData(newData: any) {
    this.sharedDataSubject.next(newData);
  }

  getData() {
    return this.sharedDataSubject.getValue(); // Get current value
  }

  fetchCatagories(parent: string) {
    const promise1 = this.masterIdGetter.getParent(parent); // Replace with your service call
    promise1.then((data) => {
       const promise2=  this.getAllPageCatagories(data[0].id)
       promise2.then((data2)=>{
        this.setData(data2)
       })
    })
  }


}
