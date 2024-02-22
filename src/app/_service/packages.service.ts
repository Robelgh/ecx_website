import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, firstValueFrom } from 'rxjs';
import { environment } from '../../environment/environment';
import { PackagesModel } from '../_model';
import { Commodities } from '../_model/_commodities.model';


const usersKey = 'samplekeyforfakebackend';
const usersJSON = localStorage.getItem(usersKey);


const baseUrl = `assets/json/packages.json`;

@Injectable({ providedIn: 'root' })
export class PackagesService {

    jsonDataResult: any;
    constructor(private http: HttpClient) { }

    
   

    async getpackages() 
    {
          return  await firstValueFrom(this.http.get<PackagesModel[]>(baseUrl));
    }

   async  setData() {
        // return await localStorage.setItem('data', JSON.stringify(Users));
    }
 

}