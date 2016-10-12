import { Component } from '@angular/core';

export class Card {
    cardId: number;
    name: string;
}

const CARDS: Card[] = [
    { cardId: 11, name: 'Mr. Nice' },
    { cardId: 12, name: 'Narco' },
    { cardId: 13, name: 'Bombasto' },
    { cardId: 14, name: 'Celeritas' },
    { cardId: 15, name: 'Magneta' },
    { cardId: 16, name: 'RubberMan' },
    { cardId: 17, name: 'Dynama' },
    { cardId: 18, name: 'Dr IQ' },
    { cardId: 19, name: 'Magma' },
    { cardId: 20, name: 'Tornado' }
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
