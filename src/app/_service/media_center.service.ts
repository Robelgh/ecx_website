import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, firstValueFrom } from 'rxjs';
import { environment } from '../../environment/environment';
import { Commodities } from '../_model/_commodities.model';
// import { saveAs } from 'file-saver';
const baseUrl = `${environment.apiUrl}/News`;
const downloadUrl = `${environment.apiUrl}/Download`;
const publicationUrl = `${environment.apiUrl}/Publication`;
const trainingDocumentUrl = `${environment.apiUrl}/TrainingDoc`;
const brouchureUrl = `${environment.apiUrl}/Brochure`;
const reasearchUrl = `${environment.apiUrl}/Research`;
const announcementsUrl = `${environment.apiUrl}/Announcement`;
const newsUrl = `${environment.apiUrl}/News`;


@Injectable({ providedIn: 'root' })
export class MediaCenterService {
    constructor(private http: HttpClient) { }


   async  getAll() {
        return await firstValueFrom(this.http.get(baseUrl));
    }
    async  getAllPublication() {
        return await firstValueFrom(this.http.get(publicationUrl));
    } 

    async  getAllTrainingDocument() {
        return await firstValueFrom(this.http.get(trainingDocumentUrl));
    } 

    async  getAllBrouchure() {
        return await firstValueFrom(this.http.get(brouchureUrl));
    }

    async  getAllAnnouncements() {
        return await firstValueFrom(this.http.get(announcementsUrl));
    }

    async  getAllNews() {
        return await firstValueFrom(this.http.get(newsUrl));
    }
    
    async  getAllResearch() {
        return await firstValueFrom(this.http.get(reasearchUrl));
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
    getImagePath(){
        return 'https://localhost:7284/image/';
      }
     downloadFile(filenameorginal:string ,filenamenew:string)
    {
        return  downloadUrl + `/${filenameorginal}/${filenamenew}`;
    }  
  
}