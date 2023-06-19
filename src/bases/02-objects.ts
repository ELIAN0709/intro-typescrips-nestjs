export const pokemonsIds = [1,20,30,34,66];
pokemonsIds.push(+'1');  //error de tipado | conversion de number con el '+'

//interfas
interface Pokemon {
    id: number;
    name: string;
    ega?: number | undefined; // valor opcional ?
}

export const bulbasaur: Pokemon = {
    id: +'1', // escape de number
    name: 'Bulbasaur',
    ega: 22
}

export const charmander: Pokemon = {
    id: 4,
    name: ' Charmander'
}

export const pokemons: Pokemon[] = [];
pokemons.push(charmander, bulbasaur);

 
console.log(typeof pokemonsIds)
console.log(bulbasaur)
console.log(pokemons)



