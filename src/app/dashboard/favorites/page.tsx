import { PokemonFavorites, PokemonItems, PokemonsResponse, SimplePokemons } from "@/pokemons";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Favoritos',
    description: 'Listado de pokemons favoritos'
}



export default function Pokemons() {

    return (
        <div className="flex flex-col items-center">
            <span className="text-5xl my-7 text-center">Pokemons Favoritos <small className="text-sky-600 font-semibold">Global State</small></span>
            <PokemonFavorites/>
        </div>
  );
}