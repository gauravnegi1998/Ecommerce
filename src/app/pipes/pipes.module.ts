import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ArrayLength } from "./array-length.pipe";
import { CurrencyFormatterPipe } from "./currenyFormat.pipe";

@NgModule({
    declarations: [ArrayLength, CurrencyFormatterPipe],
    imports: [CommonModule],
    exports: [ArrayLength, CurrencyFormatterPipe]
})

export class PipesModules { }