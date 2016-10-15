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
    selectedCard: Card;

    ngOnInit():void {
        this.selectedSet = 'Basic';
    }

    onSelect(card: Card): void {
        this.selectedCard = card;
    }
}
