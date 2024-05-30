import { Component, OnInit } from "@angular/core";
import CountryStateService from "../../../services/countryState.service";


@Component({
    selector: 'app-countryState',
    standalone: true,
    imports: [],
    templateUrl: './countryState.component.html',
    styleUrl: './countryState.component.scss'
})

export class CountryStateInputs implements OnInit {

    countryArray = [];
    states = [];

    constructor(private countryApi: CountryStateService) {
        this.countryArray = this.countryApi._getAllCountry().subscribe({
            next: (data: any) => {
                console.log(data, 'ddddddddddddddddddddddddd')
                return data;
            },
            errors: (err: any) => {

            }
        });
    }

    ngOnInit(): void {
        console.log(this.countryArray, 'this.countryArray')
    }
}