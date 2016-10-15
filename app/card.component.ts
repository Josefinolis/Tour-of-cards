import {Component, OnInit} from '@angular/core';
import {Card} from './card';
import {CardService} from './card.service';

@Component({
    moduleId: module.id,
    selector: 'my-cards',
    templateUrl: 'card.component.html',
    styleUrls: ['card.component.css'],
    providers: [CardService]
})

export class CardComponent implements OnInit {

    sets: string[] = [
        'Basic',
        'Classic',
        'Credits',
        'Naxxramas',
        'Debug',
        'Goblins vs Gnomes',
        'Missions',
        'Promotion',
        'Reward',
        'System',
        'Blackrock Mountain',
        'Hero Skins',
        'Tavern Brawl',
        'The Grand Tournament'
        ];
    selectedSet: string;
    errorMessage: string;
    cards: Card[];
    selectedCard: Card;

    constructor(private cardService: CardService) { }

    getCards(set: string): void {
        this.cardService.getCardsHttp(set).subscribe(
            cards => this.cards = cards,
            error => this.errorMessage = <any>error
        );
    }

    ngOnInit():void {
        this.getCards('Basic');
    }

    onSelect(card: Card): void {
        this.selectedCard = card;
    }
}
