import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, firstValueFrom } from 'rxjs';
import { environment } from '../../environment/environment';
import { Users } from '../_model';
import { UserService } from '../_service';
import { Commodities } from '../_model/_commodities.model';


const baseUrl = `assets/json/data.json`;

@Injectable({ providedIn: 'root' })
export class AuthService {

    jsonDataResult: any;
    constructor(private http: HttpClient , private service: UserService) { }

    async getfromLocalStorage()
    {
   
    }

    async settolocalStorage()
    {
       return await this.service.getusers()
    }

    async isAuthenticated(item: any){

        this.jsonDataResult=await this.service.getusers();
        this.jsonDataResult.filter((x:any)=>
        {
            console.log(x)
        })
        console.log(this.jsonDataResult)
        console.log(item)

        return await true

    }
 

}