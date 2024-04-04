"use client";

import { useAppSelector } from '@/store';
import { PokemonItems } from './PokemonItems'
import { IoHeart } from 'react-icons/io5';

export const PokemonFavorites = () => {
    const pokemonsFavorite = useAppSelector(state => Object.values(state.pokemon.favorites))
    return (
        <div>
            {
                pokemonsFavorite.length != 0 ? (<PokemonItems pokemons={ pokemonsFavorite }/>) :
                (<PokemonNoFavorites/>) 
            }
        </div>

        
    )
}

export const PokemonNoFavorites = () => {
  return (
    <div className='flex flex-col items-center min-h-96 justify-center'>
        <IoHeart size={150} color='red'/>
        <span className='mt-5 text-3xl font-semibold'>No hay favoritos</span>
    </div>
  )
}

