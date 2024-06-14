import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import CountryStateService from "../../../services/countryState.service";
import * as _ from 'lodash';
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { ICountryStateError } from "../../module/commonInterfaces";


@Component({
    selector: 'app-countryState',
    standalone: true,
    imports: [FormsModule, CommonModule],
    templateUrl: './countryState.component.html',
    styleUrl: './countryState.component.scss'
})

export class CountryStateInputs implements OnInit {

    @Input() country: string = "";
    @Input() state: string = "";
    @Input() errors: ICountryStateError = { countryError: "", stateError: "" }

    @Output() countryChange = new EventEmitter<string>();
    @Output() stateChange = new EventEmitter<string>();
    @Output() errorsChange = new EventEmitter<any>();

    countryArray: { name: string, code: string }[] = [{ name: "", code: "" }];
    statesArray: string[] = [];

    constructor(private countryApi: CountryStateService) {
        this.countryArray = _.map(this.countryApi._getAllCountry(), (data) => ({ name: data?.name, code: data?.shortName }));
    }

    ngOnInit(): void {
        console.log(this.statesArray, 'this.countryArray')
    }

    _handleChangeSelect(code: string, section: string): void {
        if (section === "country") {
            if (code) {
                this.statesArray = this.countryApi._getStatesByCountry(code);
                this.countryChange.emit(code);
                this.errorsChange.emit({ ...this.errors, countryError: "" })
            } else {
                this.statesArray = [];
                this.stateChange.emit("");
                this.errorsChange.emit({ countryError: "Please select your country", stateError: "" })
            }

        } else {
            if (code) {
                this.stateChange.emit(code);
                this.errorsChange.emit({ ...this.errors, stateError: "" })
            } else {
                this.errorsChange.emit({ ...this.errors, stateError: "Please select your state" })
            }
        }
    }
}