import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, firstValueFrom } from 'rxjs';
import { environment } from '../../environment/environment';
import { Commodities } from '../_model/_commodities.model';


const baseUrl = `assets/json/data.json`;

@Injectable({ providedIn: 'root' })
export class AuthService {

    jsonDataResult: any;
    constructor(private http: HttpClient) { }

    async getfromLocalStorage()
    {
   
    }

    async settolocalStorage()
    {
       
    }

    async isAuthenticated(item: any){

    
        this.jsonDataResult.filter((x:any)=>
        {
            console.log(x)
        })
        console.log(this.jsonDataResult)
        console.log(item)

        return await true

    }
 

}