import {Component, Input, OnInit, OnChanges, SimpleChanges, Output, EventEmitter} from '@angular/core';
import {Card} from './card';
import {CardService} from './card.service';

@Component({
    moduleId: module.id,
    selector: 'my-card-list',
    templateUrl: 'card-list.component.html',
    styleUrls: ['card-list.component.css'],
    providers: [CardService]
})

export class CardListComponent implements OnInit, OnChanges {

    errorMessage:string;
    cards:Card[];
    @Output() selectCardRequest = new EventEmitter<Card>();
    @Input() set:string;

    constructor(private cardService:CardService) {}

    ngOnChanges(changes:SimpleChanges):void {
        this.getCards(this.set);
    }

    ngOnInit(): void {
        this.getCards(this.set);
    }
    
    selectCard(selectedCard: Card) {
        this.selectCardRequest.emit(selectedCard)
    }

    getCards(set:string):void {
        this.cardService.getCardsHttp(set).subscribe(
            cards => this.cards = cards,
            error => this.errorMessage = <any>error
        );
    }
}
