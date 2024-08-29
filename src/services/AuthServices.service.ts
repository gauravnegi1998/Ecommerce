import { Injectable } from "@angular/core";
import SecureLocalStorage from "./secureStorage.service";
import { ApiService } from "./ApiHelper.service";
import _ from "lodash";
import { Router } from "@angular/router";
import { ICustomerData } from "../app/module/commonInterfaces";
import { BehaviorSubject } from "rxjs";
import { _asynchronousFunction } from "../app/Common/Methods";

@Injectable({
    providedIn: "root"
})

export class AuthServices {

    token!: string;
    observable$ = new BehaviorSubject<ICustomerData | null>(null);
    userData = this.observable$.asObservable();

    constructor(private loginStore: SecureLocalStorage, private router: Router, private api: ApiService, private localStore: SecureLocalStorage) {
        // this.token = this.loginStore.getItem('token') ? this.loginStore.getItem('token') : ""
        if (this.localStore.getItem('userDetails')) {
            this._setUserData(JSON.parse(this.localStore.getItem('userDetails')) || null)
        }
    }



    // get login userData


    // login Api

    _authenticationError(err: any) {
        if (err?.error?.status === "error" && (err?.error?.message === "invalid token" || err?.error?.message === "unauthorized user")) {
            this.localStore.removeData('Token')
            this.router.navigateByUrl('/signin');
        }
    }


    // get login user detail's

    _getUserDetails() {
        // this.api.get(``)
    }

    loginUser(value: { email: string, password: string }) {
        this.api.post('/login', value).then((response) => {
            if (_.eq(response?.status, 'ok')) {
                this._setToken(response?.token);
                this.router.navigateByUrl('/');
            }
        }).catch((err) => {
            console.log(err);
        })
    }

    _getToken() {
        return this.loginStore.getItem('Token');
    }

    _setToken(token: string) {
        this.localStore.setItem('Token', token)
    }

    _setUserData(newQuote: ICustomerData | null) {
        this.localStore.setItem('userData', JSON.stringify(newQuote));
        // function to update the value of the BehaviorSubject
        this.observable$.next(newQuote);
    }

    _getUserData() {

    }


    _isUserLogin() {
        return !!(this._getToken())
    }




}