import { Component } from '@angular/core';
import {Card} from "./card";

const CARDS: Card[] = [
    { cardId: '11', name: 'Mr. Nice' },
    { cardId: '12', name: 'Narco' },
    { cardId: '13', name: 'Bombasto' },
    { cardId: '14', name: 'Celeritas' },
    { cardId: '15', name: 'Magneta' },
    { cardId: '16', name: 'RubberMan' }
];

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    styleUrls: ['app/app.component.css']
})

export class AppComponent {
    title = 'Tour of Cards';
    cards = CARDS;
    selectedCard: Card;

    onSelect(card: Card): void {
        this.selectedCard = card;
    }
}
