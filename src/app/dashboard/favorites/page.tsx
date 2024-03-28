import { PokemonItems, PokemonsResponse, SimplePokemons } from "@/pokemons";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Favoritos',
    description: 'Listado de pokemons favoritos'
}

const getPokemons = async (limit = 20, offset = 0) : Promise<SimplePokemons[]> => {
    const data : PokemonsResponse = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${ limit }&offset=${ offset }`)
    .then( res => res.json() );

    const pokemons = data.results.map(pokemon => ({
        id: pokemon.url.split('/').at(-2)!,
        name: pokemon.name,
    }));

    return pokemons;
}


export default async function Pokemons() {
    const pokemons = await getPokemons(151);    

    return (
        <div className="flex flex-col items-center h-screen">
            <span className="text-5xl my-7 text-center">Pokemons Favoritos <small className="text-sky-600 font-semibold">Global State</small></span>
            <PokemonItems pokemons={ pokemons } />
        </div>
  );
}