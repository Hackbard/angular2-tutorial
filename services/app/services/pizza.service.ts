import {Injectable} from 'angular2/core';

@Injectable()
export class PizzaService {
    ladeAngebot() {
        return [{
            "id": 1,
            "name": "Pizza Vegetaria",
            "preis": 5.99
        }, {
            "id": 2,
            "name": "Pizza Salami",
            "preis": 10.99
        }, {
            "id": 3,
            "name": "Pizza Thunfisch",
            "preis": 7.99
        }, {
            "id": 4,
            "name": "Aktueller Flyer",
            "preis": 0
        }]
    }
}