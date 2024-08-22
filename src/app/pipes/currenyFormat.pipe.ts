import { Pipe, PipeTransform } from "@angular/core";
import _ from "lodash";

@Pipe({
    name: 'currency'
})

export class CurrencyFormatterPipe implements PipeTransform {

    transform(value: any, ...args: any[]) {
        return _.isNaN(value) ? "" : `$${value}`
    }
}