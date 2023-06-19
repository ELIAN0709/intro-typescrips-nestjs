
import { Move, PokeapiResponse } from "../interfaces/pokeapi-response.interface";
import { HttpAdapter, PokeApiAdapter, PokeApiFetchAdapter } from "../api/pokeApi.adapter";


export class Pokemon {
    get imageUrl(): string {
        return `http:pokemon.com/${this.id}.jpg`;
    }

    constructor(
        public readonly id: number,
        public name: string,
        // todo: inyectar dependencias
        private readonly http: HttpAdapter
    ) {}

    screan() {
        console.log(`${this.name.toUpperCase}!!!`);
    }

    speack() {
        console.log(`${this.name}, ${this.name}`);
    }

    async getMoves(): Promise<Move[]>{
        const  data  = await this.http.get<PokeapiResponse>('https://pokeapi.co/api/v2/pokemon/4');
        console.log(data.moves)

        return data.moves;
    }

}
const pokeApiAxios = new PokeApiAdapter()
const pokeApiFetch = new PokeApiFetchAdapter()

export const charmander = new Pokemon(4, 'charmander', pokeApiFetch);
charmander.getMoves();