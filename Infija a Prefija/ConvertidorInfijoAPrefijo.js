import { Pila } from './Pila.js';

export class ConvertidorInfijoAPrefijo {
    constructor() {
        this.precedencia = {
            '+': 1,
            '-': 1,
            '*': 2,
            '/': 2,
            '^': 3
        };
    }

    esOperador(caracter) {
        return this.precedencia.hasOwnProperty(caracter);
    }

    infijoAPrefijo(expresionInfija) {
        let expresionPrefija = '';
        const pila = new Pila();

        for (let i = expresionInfija.length - 1; i >= 0; i--) {
            const caracter = expresionInfija[i];

            if (this.esOperador(caracter)) {
                while (!pila.estaVacia() && this.precedencia[pila.verTope()] > this.precedencia[caracter]) {
                    expresionPrefija = pila.desapilar() + expresionPrefija;
                }
                pila.apilar(caracter);
            } else if (caracter === ')') {
                pila.apilar(caracter);
            } else if (caracter === '(') {
                while (!pila.estaVacia() && pila.verTope() !== ')') {
                    expresionPrefija = pila.desapilar() + expresionPrefija;
                }
                pila.desapilar(); 
            } else {
                expresionPrefija = caracter + expresionPrefija;
            }
        }

        while (!pila.estaVacia()) {
            expresionPrefija = pila.desapilar() + expresionPrefija;
        }

        return expresionPrefija;
    }
}
