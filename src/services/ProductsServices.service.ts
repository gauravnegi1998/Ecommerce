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
    static url: string = "/items/web-categories"

    constructor(private auth: AuthServices, private api: ApiService, private toaster: ToastrService) { }

    //category Api Section

    _addCategory(data: { categoryId: number, categoryName: string }, callback: (data?: any) => void = () => console.log('callback')) {
        this.api.post(ProductsServices.url, data)
            .then((result) => {
                if (result.status === 'ok') {
                    this.toaster.success(result.message);
                    callback();
                } else {
                    this.toaster.error(result.message);
                }
            }).catch((err) => {
                alert(JSON.stringify(err))
                this.toaster.error(err.message);
            })
    }

    _getCategories(data: { page: number, limit: number }) {
        const { page, limit } = data;
        this.api.get(`${ProductsServices.url}?page=${page || 1}&limit=${limit || 6}`)
            .then((result) => {
                if (result.status === 'ok') {
                    this.categories = result?.data;
                } else {
                    this.errorMsg = result?.message
                }
            }).catch((err) => {

            })
    }

    _deleteCategory(id: string | null) {
        this.api.delete(`${ProductsServices.url}/${id}`)
            .then((result) => {
                if (result.status === 'ok') {
                    this.toaster.success(result.message);
                } else {
                    this.toaster.error(result.message);
                }
            }).catch((err) => {
                alert(JSON.stringify(err))
                this.toaster.error(err.message);
            })
    }


}