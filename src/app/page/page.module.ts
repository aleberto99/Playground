import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CentralPageComponent } from "./central-page/central-page.component";
import {MatIconModule} from '@angular/material/icon';
import { TabSectionComponent } from "./tab-section/tab-section.component";
import { HttpClientModule } from '@angular/common/http';
import { WidgetModule } from "../widget/widget.module";
import { ContactComponent } from "./contact/contact.component";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from "./footer/footer.component";
import { HomeComponent } from "./home/home.component";
import {IvyCarouselModule} from 'angular-responsive-carousel';


@NgModule({
    imports: [
        CommonModule,
        MatIconModule,
        HttpClientModule,
        WidgetModule,
        FormsModule,
        ReactiveFormsModule,
        IvyCarouselModule
    ],
    declarations: [
        CentralPageComponent,
        TabSectionComponent,
        ContactComponent,
        FooterComponent,
        HomeComponent
    ],
    exports: [
        CentralPageComponent,
        TabSectionComponent,
        ContactComponent,
        FooterComponent,
        HomeComponent
    ]
})
export class PageModule{}