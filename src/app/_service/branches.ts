import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { environment } from '../../environment/environment';

const baseUrl = `${environment.apiUrl}/WareHouse`;

@Injectable ({providedIn: 'root'})

export class Branches
{
  constructor(
    private http:HttpClient
  ){}

  async getAllBranches()
  {
    return await firstValueFrom(this.http.get(baseUrl))
  }
}