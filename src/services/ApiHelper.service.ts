import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { devEnvironment } from "../environments/dev.environment";
import _ from 'lodash';
import SecureLocalStorage from "./secureStorage.service";

@Injectable({
    providedIn: 'root'
})

export class ApiService {

    private apiRootUrl: string = devEnvironment.apiUrl;

    constructor(private Https: HttpClient, private localStore: SecureLocalStorage) { }

    private createHeader(rest: boolean = false): HttpHeaders {
        let headers: HttpHeaders = new HttpHeaders({
            'Content-Type': "application/json",
            'Accept': 'application/json',
        })
        // if (rest) {
        //     headers = headers.set('Token', (this.localStore.getItem('token')) ? this.localStore.getItem('token') : '');
        // }
        return headers;
    }

    public get(endPoint: string, header: boolean = false): Promise<any> {
        const headers = this.createHeader(header);
        const _getRequest = this.Https.get(this.apiRootUrl + endPoint, { headers });

        return new Promise<any>((resolve, reject) => {
            _getRequest.subscribe({
                next: (data: any) => resolve(data),
                error: (err: any) => reject(err)
            })
        })
    }


    public post(endPoint: string, data: any, header: boolean = false): Promise<any> {
        let headers = this.createHeader(header);
        const _postRequest = this.Https.post(this.apiRootUrl + endPoint, data, { headers });
        return new Promise<any>((resolve, reject) => {
            _postRequest.subscribe({
                next: (data: any) => resolve(data),
                error: (err: any) => reject(err)
            })
        })
    }

    public put(endPoint: string, data: any, header: boolean = false): Promise<any> {
        let headers = this.createHeader(header)
        const _PUT_REQUEST = this.Https.put(this.apiRootUrl + endPoint, data, { headers });
        return new Promise<any>((resolve, reject) => {
            _PUT_REQUEST.subscribe({
                next: (data) => resolve(data),
                error: err => reject(err)
            })
        })
    }

    public delete(url: string): Promise<any> {
        let headers = this.createHeader();
        const DELETE_REQUEST = this.Https.delete(this.apiRootUrl + url, { headers });
        return new Promise<any>((resolve, reject) => {
            DELETE_REQUEST.subscribe({
                next: (response) => resolve(response),
                error: (error) => reject(error)
            })
        })
    }
}