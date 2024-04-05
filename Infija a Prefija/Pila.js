import { Nodo } from './Nodo.js';

export class Pila {
    constructor() {
        this.tope = null;
        this.tamanio = 0;
    }

    apilar(elemento) {
        const nuevoNodo = new Nodo(elemento);
        nuevoNodo.siguiente = this.tope;
        this.tope = nuevoNodo;
        this.tamanio++;
    }

    desapilar() {
        if (!this.estaVacia()) {
            const nodoEliminado = this.tope;
            this.tope = this.tope.siguiente;
            this.tamanio--;
            return nodoEliminado.data;
        } else {
            return "Subdesbordamiento"; 
        }
    }

    verTope() {
        if (!this.estaVacia()) {
            return this.tope.data;
        } else {
            return null; 
        }
    }

    estaVacia() {
        return this.tamanio === 0;
    }
}
