import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }  from './app.component';
import {CardDetailComponent} from "./card-detail.component";
import {CardComponent} from "./card.component";
import {CardService} from "./card.service";
import {HttpModule, JsonpModule} from "@angular/http";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        JsonpModule,
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
