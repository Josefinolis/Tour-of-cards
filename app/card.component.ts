import {Component, OnInit} from '@angular/core';
import {Card} from "./card";
import {CardService} from "./card.service";

@Component({
    moduleId: module.id,
    selector: 'my-cards',
    templateUrl: 'card.component.html',
    styleUrls: ['card.component.css'],
    providers: [CardService]
})

export class CardComponent implements OnInit {
    cards: Card[];
    selectedCard: Card;
    constructor(private cardService: CardService) { }

    getCards(): void {
        this.cardService.getCards().then(cards => this.cards = cards);
    }

    ngOnInit():void {
        this.getCards();
    }

    onSelect(card: Card): void {
        this.selectedCard = card;
    }
}
