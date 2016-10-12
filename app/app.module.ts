import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }  from './app.component';
import {CardDetailComponent} from "./card-detail.component";
import {CardComponent} from "./card.component";
import {CardService} from "./card.service";
@NgModule({
    imports: [
        BrowserModule,
        FormsModule
    ],
    declarations: [
        AppComponent,
        CardDetailComponent,
        CardComponent
    ],
    providers: [
        CardService
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
