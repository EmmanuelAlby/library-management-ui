import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {mergeMap} from 'rxjs/operators'
import { of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }



    login(url,request: any) {
        const httpOption = {
            headers: new HttpHeaders({
                'Content-Type' : 'application/json',
            })
        }
        return this.http.post(url,request, httpOption).pipe(mergeMap((res:any)=>{
            return of(res);
        }));
    }

    add(url,request: any) {
        const httpOption = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization':'Bearer' + 'token'
            })
        }
        return this.http.post(url,request, httpOption).pipe(mergeMap((res:any)=>{
            return of(res);
        }));
    }
}