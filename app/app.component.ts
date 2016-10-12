import {Component, OnInit} from '@angular/core';
import {Card} from "./card";
import {CardService} from "./card.service";

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    styleUrls: ['app/app.component.css'],
    providers: [CardService]
})

export class AppComponent implements OnInit {
    title = 'Tour of Cards';
    cards: Card[];
    selectedCard: Card;
    constructor(private cardService: CardService) { }

    getCards(): void {
        this.cards = this.cardService.getCards();
    }

    ngOnInit():void {
        this.getCards();
    }

    onSelect(card: Card): void {
        this.selectedCard = card;
    }
}
