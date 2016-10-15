import { Injectable } from '@angular/core';
import {Card} from "./card";
import {Http, Headers, Response} from "@angular/http";
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Observable} from "rxjs/Rx";

@Injectable()
export class CardService {

    constructor(private http: Http) { }

    getCardsHttp(set: string): Observable<Card[]> {
        return this.http.get(
            `https://omgvamp-hearthstone-v1.p.mashape.com/cards/sets/${set}`,
            {headers: new Headers({'X-Mashape-Key': 'XVqyMLCg4dmsh3BTZ6vQdeApQmhCp1MiHOjjsnu9XRNQiUycNZ'})}
        )
            .map(this.extractData)
            .catch(this.handleError);
    }

    private extractData(res: Response) {
        let body = res.json();
        return body || { };
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

}
