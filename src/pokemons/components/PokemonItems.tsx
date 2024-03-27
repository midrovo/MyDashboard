import React from 'react'
import { PokemonCard, SimplePokemons } from '..'

interface Props {
    pokemons: SimplePokemons[],
}

export const PokemonItems = ({ pokemons } : Props) => {
    return (
    <div className="flex justify-around flex-wrap">
        {
            pokemons.map(pokemon => (
                <PokemonCard key={ pokemon.id } pokemon={ pokemon }/>
            ))
        }
    </div>
  )
}
