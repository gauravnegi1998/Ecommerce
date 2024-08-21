import { Injectable } from "@angular/core";
import { AuthServices } from "./AuthServices.service";
import { ApiService } from "./ApiHelper.service";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";

@Injectable({
    providedIn: 'root'
})

export class ProductsServices {

    categories: { _id: string, categoryId: number, categoryName: string }[] = [];
    successfulMsg: string = "";
    errorMsg: string = "";
    static CategoryUrl: string = "/items/web-categories";
    static ProductUrl: string = "/items"

    constructor(private auth: AuthServices, private api: ApiService, private toaster: ToastrService) { }

    //category Api Section

    _addCategory(data: { categoryId: number, categoryName: string }, callback: (data?: any) => void = () => console.log('callback')) {
        this.api.post(ProductsServices.CategoryUrl, data)
            .then((result) => {
                if (result.status === 'ok') {
                    this.toaster.success(result.message);
                    callback();
                } else {
                    this.toaster.error(result.message);
                }
            }).catch((err) => {
                this.toaster.error(err.message);
            })
    }

    _getCategories(data: { page?: number, limit: number }, callback?: (data: any) => void) {
        const { page, limit } = data;
        this.api.get(`${ProductsServices.CategoryUrl}?page=${page || 1}&limit=${limit || 6}`)
            .then((result) => {
                if (result.status === 'ok') {
                    this.categories = result?.data;
                    if (callback) callback(result?.data)
                } else {
                    this.errorMsg = result?.message
                }
            }).catch((err) => {

            })
    }

    _deleteCategory(id: string | null) {
        this.api.delete(`${ProductsServices.CategoryUrl}/${id}`)
            .then((result) => {
                if (result.status === 'ok') {
                    this.toaster.success(result.message);
                } else {
                    this.toaster.error(result.message);
                }
            }).catch((err) => {
                this.toaster.error(err.message);
            })
    }


    // ******************************* Product api's

    _addProduct(data: any, callback?: (data: any) => void) {
        this.api.post(`${ProductsServices.ProductUrl}`, data, true).then((result) => {
            if (result.status === 'ok') {
                if (callback) callback(result);
                this.toaster.success(result.message);
            } else {
                this.toaster.error(result.message);
            }
        }).catch((err) => {
            this.toaster.error(err.message);
        })
    }

    _getAllProduct(data: { page: number, limit: number }, callback?: (data: any) => void) {
        const { page, limit } = data;
        this.api.get(`${ProductsServices.ProductUrl}?page=${page || 1}&limit=${limit || 8}`).then((result) => {
            if (result.status === 'ok') {
                if (callback) callback(result);
            } else {
                this.toaster.error(result.message);
            }
        }).catch((err) => {
            this.toaster.error(err.message);
        })
    }


}