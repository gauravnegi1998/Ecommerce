import { Injectable } from "@angular/core";
import SecureLocalStorage from "./secureStorage.service";
import { ApiService } from "./ApiHelper.service";
import _ from "lodash";
import { Router } from "@angular/router";

@Injectable({
    providedIn: "root"
})

export class AuthServices {

    token!: string;

    constructor(private loginStore: SecureLocalStorage, private router: Router, private api: ApiService, private localStore: SecureLocalStorage) {
        // this.token = this.loginStore.getItem('token') ? this.loginStore.getItem('token') : ""
    }

    // login Api

    loginUser(value: { email: string, password: string }) {
        this.api.post('/login', value).then((response) => {
            if (_.eq(response?.status, 'ok')) {
                this._setToken(response?.token);
                this.router.navigateByUrl('/');
            }
        }).catch((err) => {
            console.log(err)
        })
    }

    _getToken() {
        return this.loginStore.getItem('Token');
    }

    _setToken(token: string) {
        this.localStore.setItem('Token', token)
    }

    _isUserLogin() {
        return !!(this._getToken())
    }


}