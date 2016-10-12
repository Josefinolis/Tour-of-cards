import { Component, Input } from '@angular/core';
import {Card} from "./card";


@Component({
    selector: 'my-card-detail',
    templateUrl: 'app/card-detail.component.html'
})
export class CardDetailComponent {
    @Input()
    card: Card;
}
