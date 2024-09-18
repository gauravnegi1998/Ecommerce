import { Injectable } from "@angular/core";
import { _asynchronousFunction } from "../app/Common/Methods";
import { ApiService } from "./ApiHelper.service";
import { ICustomerData } from "../app/module/commonInterfaces";

@Injectable({
    providedIn: "root"
})

export class CustomerService extends _asynchronousFunction {

    static customerUrl = '/api/customers'

    constructor(private api: ApiService) {
        super()
    }

    _getSingleUser(ID: string, callback?: (data: any) => void) {
        this._callTheAPi(this.api.get(`${CustomerService.customerUrl}/${ID}?timeStamp=${new Date().getTime()}`), (success, error) => {
            if (error) {
                // write a custom message
            } else {
                if (callback) callback(success);
            }
        })
    }

    _addCustomers(data: { id: string, data: ICustomerData }, callback?: (data: any) => void) {
        this._callTheAPi(this.api.post(`${CustomerService.customerUrl}/${data?.data?._id}/review`, data?.data, true), (success, error) => {
            if (error) {
                // write a custom message
            } else {
                if (callback) callback(success);
            }
        })
    }

    _updateCustomers(data: { id: string, data: ICustomerData }, callback?: (data: any) => void) {
        this._callTheAPi(this.api.put(`${CustomerService.customerUrl}/${data.data?._id}`, data, true), (success, error) => {
            if (error) {
                // write a custom message
            } else {
                if (callback) callback(success);
            }
        })
    }

    _deleteCustomers(id: string, callback?: (data: any) => void) {
        this._callTheAPi(this.api.delete(`${CustomerService.customerUrl}/${id}`, true), (success, error) => {
            if (error) {
                // write a custom message
            } else {
                if (callback) callback(success);
            }
        })
    }

}