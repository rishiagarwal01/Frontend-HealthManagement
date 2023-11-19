import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Doctor } from '../models/doctor';
import { User } from '../models/user';
import { catchError, map } from "rxjs/operators";
// import { environment } from '../../environments/environment';

import { Userlist } from '../models/userlist';
import { environment } from 'src/environments/environment';
// import { environment } from 'src/environments/environment.development';



@Injectable({
    providedIn: 'root'
})
export class RegistrationService {

    // user = new User();
    // doctor = new Doctor();
    baseApiUrl: string = environment.baseApiUrl;
    constructor(private _http: HttpClient) { }

    // public registerUserFromRemote(user: User): Observable<any> {
    //     return this._http.post<any>(`${this.baseApiUrl}/registeruser`, user)
    // }

    // public registerDoctorFromRemote(doctor: Doctor): Observable<any> {
    //     return this._http.post<any>(`${NAV_URL}/registerdoctor`, doctor)
    // }
    getPatient(): Observable<User[]> {
        return this._http.get<User[]>(this.baseApiUrl + '/api/Patient');
    }

    postDoctor(doctorData: Doctor): Observable<Doctor> {
        return this._http.post<Doctor>(this.baseApiUrl + '/api/Doctor', doctorData);
    }

    getDoctor(): Observable<Doctor[]> {
        return this._http.get<Doctor[]>(this.baseApiUrl + '/api/Doctor');
    }

    updateDoctor(data: any): Observable<Doctor[]> {
        const url = `${this.baseApiUrl}/api/Doctor/${data.id}`;
        return this._http.put(url, data)
            .pipe(
                map(response => {
                    return response as Doctor[];
                }),
                catchError(error => {
                    console.log(error);
                    return throwError(error);
                })
            );
    }

    postUser(docD: Userlist): Observable<Userlist> {
        return this._http.post<Userlist>(this.baseApiUrl + '/api/Users/register', docD);
    }
}