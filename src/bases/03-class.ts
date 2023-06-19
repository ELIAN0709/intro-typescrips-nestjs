/*export class Pokemon {
    
    public id: number;
    public name: string;

    constructor( id: number, name: string ) {
        this.id = id;
        this.name = name;
        console.log('constructor llamado')
    }
    
}*/

import axios from "axios";
import { Move, PokeapiResponse } from "../interfaces/pokeapi-response.interface";

export class Pokemon {// forma corta de hacer una clase 
    
    //getter and setter 
    get imageUrl(): string {
        return `https://pokemons.com/${ this.id }.jpg`;
    }

    // propiedades | constructor 
    constructor(
        public readonly id: number, // solo lectura, no se puede cambiar
        public name: string,
    ) {}

    // metodos 
    public screan() { // defaul
        console.log(`${ this.name.toUpperCase()} !!!`);
    }

    private speak() { // nivel de acceso
        console.log(`${this.name}, ${this.name}`);
    }

    // metodo asincrono ---> debuelve una promesa 
    async getMoves():Promise<Move[]> {
        const { data } = await axios.get<PokeapiResponse>('https://pokeapi.co/api/v2/pokemon/4');
        //console.log(data); // desectructuracion
        console.log(data.moves[0].move.name );
        
        return data.moves; // promesa de arreglo de movimeintos
    }


}

export const charmander = new Pokemon(2, 'charmander')
console.log(charmander)

//charmander.speak();
charmander.screan();

//charmander.id = 10; // error de forma
//charmander.name = 'bulbasaur';

//console.log(charmander.getMoves())

charmander.getMoves()