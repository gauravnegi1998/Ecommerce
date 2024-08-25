import { inject, OnInit } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { AuthServices } from "../../services/AuthServices.service";

export class _asyncronushFunction {

    toaster = inject(ToastrService);
    auth = inject(AuthServices);
    success: any = null;
    error: any = null;

    constructor() { }


    async _callTheAPi(apiUrl: Promise<any>, callbackFunction?: (success: any, error: any) => void) {
        await apiUrl.then((result) => {
            if (result.status === 'ok') {
                // if (callbackFunction) this.callbackFunction(result);
                this.success = result;
                console.log('ddddddddddddddddddddddddddd', result)
            } else {
                this.toaster.error(result.message);
            }
        }).catch((err) => {
            this.toaster.error(err.message);
            this.error = err;
            this.auth._authenticationError(err);
        })
        if ((this.success || this.error) && callbackFunction) {
            callbackFunction(this.success, this.error)
        }
        return this
    }

}
