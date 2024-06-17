import { NgModule } from "@angular/core";
import { ButtonComponent } from "./button/button.component";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { MaterialUIModule } from "../MaterialModel/material-ui.module";
import { TextFieldComponent } from "./Textfield/Textfield.component";
import { DatePickerComponent } from "./datepickerInput/datepicker.component";
import { NgbDatepickerModule } from "@ng-bootstrap/ng-bootstrap";
import { CardComponent } from "./card/card.component";

@NgModule({
    declarations: [
        ButtonComponent,
        TextFieldComponent,
        DatePickerComponent,
        CardComponent,
    ],
    imports: [
        CommonModule,
        MaterialUIModule,
        RouterModule,
        FormsModule,
        NgbDatepickerModule
    ],
    exports: [
        ButtonComponent,
        TextFieldComponent,
        DatePickerComponent,
        CardComponent
    ]
})

export class InputModules { };