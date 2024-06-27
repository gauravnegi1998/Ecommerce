import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { devEnvironment } from "../environments/dev.environment";

@Injectable({
    providedIn: 'root'
})

export class ApiService {

    private apiRootUrl: string = devEnvironment.apiUrl;

    constructor(private Https: HttpClient) {

    }

    private createHeader(rest?: boolean): HttpHeaders {
        let headers: HttpHeaders = new HttpHeaders({
            'Content-Type': "application/json"
        })
        return headers;
    }

    public get(endPoint: string): Promise<any> {
        const headers = this.createHeader();
        const _getRequest = this.Https.get(this.apiRootUrl + endPoint, { headers });

        return new Promise<any>((resolve, reject) => {
            _getRequest.subscribe({
                next: (data: any) => resolve(data),
                error: (err: any) => reject(err)
            })
        })
    }


    public post(endPoint: string, data: any): Promise<any> {
        let headers = this.createHeader();
        const _postRequest = this.Https.post(this.apiRootUrl + endPoint, data, { headers });
        return new Promise<any>((resolve, reject) => {
            _postRequest.subscribe({
                next: (data: any) => resolve(data),
                error: (err: any) => reject(err)
            })
        })
    }

    public put(endPoint: string, data: any): Promise<any> {
        const _PUT_REQUEST = this.Https.put(endPoint, data);
        return new Promise<any>((resolve, reject) => {
            _PUT_REQUEST.subscribe({
                next: (data) => resolve(data),
                error: err => reject(err)
            })
        })
    }

}