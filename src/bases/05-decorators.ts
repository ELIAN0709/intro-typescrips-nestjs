class NewPokemon {
    constructor(
        public id: number,
        public name: string
    ) {}

    screan() {
        console.log(`NO QUIERO!!!`);
    }

    speak() {
        console.log(`NO QUIERO HABLAR!`);
    }
}



// estructura del decorador 
const MyDecorator = () => {
    return (target: Function) => { // funcion que regrea otra funcion 
        //console.log(target);
        return NewPokemon;
    }
}

/*
"experimentalDecorators": true, --> tsconfig.json 
*/



@MyDecorator() // decorador 
export class Pokemon {

    constructor(
        public id: number,
        public name: string
    ) {}

    screan() {
        console.log(`${this.name.toUpperCase()}!!!`);
    }

    speak() {
        console.log(`${this.name}, ${this.name}!`);
    }
}

export const charmander = new Pokemon(4, 'charmander');

charmander.screan();
charmander.speak();


