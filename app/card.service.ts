import { Injectable } from '@angular/core';
import {Card} from "./card";

const CARDS: Card[] = [
    { cardId: '11', name: 'Mr. Nice' },
    { cardId: '12', name: 'Narco' },
    { cardId: '13', name: 'Bombasto' },
    { cardId: '14', name: 'Celeritas' },
    { cardId: '15', name: 'Magneta' },
    { cardId: '16', name: 'RubberMan' }
];

@Injectable()
export class CardService {

    getCards(): Promise<Card[]> {
        return Promise.resolve(CARDS);
    }

}
