import { NgModule } from "@angular/core";
import { CardComponent } from "./card/card.component";
import { ToolbarComponent } from "./toolbar/toolbar.component";
import { CommonModule } from "@angular/common";
import { SpinnerComponent } from "./spinner/spinner.component";

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        ToolbarComponent,
        CardComponent,
        SpinnerComponent
    ],
    exports: [
        ToolbarComponent,
        CardComponent,
        SpinnerComponent
    ]
})
export class WidgetModule{}