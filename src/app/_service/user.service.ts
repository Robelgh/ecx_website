import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, firstValueFrom } from 'rxjs';
import { environment } from '../../environment/environment';
import { Users } from '../_model';
import { Commodities } from '../_model/_commodities.model';


const usersKey = 'samplekeyforfakebackend';
const usersJSON = localStorage.getItem(usersKey);


const baseUrl = `assets/json/users.json`;

@Injectable({ providedIn: 'root' })
export class UserService {

    jsonDataResult: any;
    constructor(private http: HttpClient) { }

    
   

    async getusers() 
    {
          return  await firstValueFrom(this.http.get<Users[]>(baseUrl));
    }

   async  setData() {
        // return await localStorage.setItem('data', JSON.stringify(Users));
    }
 

}