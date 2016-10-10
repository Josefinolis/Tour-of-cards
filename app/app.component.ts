import { Component } from '@angular/core';
export class Card {
    cardId: number;
    name: string;
}
@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html'
})
export class AppComponent {
    title = 'Tour of Cards';
    card: Card = {
        cardId: 1,
        name: 'Windstorm'
    };
}
