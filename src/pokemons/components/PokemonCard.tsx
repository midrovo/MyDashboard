"use client";

import Link from "next/link";
import React from "react";
import { SimplePokemons } from "../interfaces/simple-pokemons";
import Image from "next/image";
import { IoHeart, IoHeartOutline } from "react-icons/io5";
import { useAppDispatch, useAppSelector } from "@/store";
import { toggleFavorite } from "@/store/pokemon/pokemon";

interface Props {
    pokemon: SimplePokemons
}

export const PokemonCard = ({ pokemon } : Props) => {

    const { id, name } = pokemon;  
    const isFavorite = useAppSelector(state => !!state.pokemon.favorites[id]);
    const dispatch = useAppDispatch();
    
    const onToggle = () => {
        dispatch( toggleFavorite(pokemon) )
    }
    
    return (
        <div className="mx-3 right-0 mt-2 w-60">
            <div className="flex flex-col bg-white rounded overflow-hidden shadow-lg">
                <div className="flex flex-col items-center justify-center text-center p-6 bg-gray-800 border-b">
                    <Image
                        className="w-24 h-24"
                        key={ id }
                        src={ `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${ id }.svg` }
                        width={ 96 }
                        height={ 96 }
                        priority={ false }
                        alt="Pokemon"/>
                        
                    <p className="pt-2 text-lg font-semibold text-gray-50 capitalize">{ name }</p>
                    <div className="mt-5">
                        <Link
                            href={ `/dashboard/pokemon/${ name }` }
                            className="border rounded-full py-2 px-4 text-xs font-semibold text-gray-100">
                            Mas informacion
                        </Link>
                    </div>
                </div>
                <div className="border-b">
                    <div onClick={ onToggle } className="px-4 py-2 hover:bg-gray-100 flex items-center cursor-pointer">
                        <div className="text-red-600">

                            {
                                isFavorite ? (<IoHeart/>) : (<IoHeartOutline/>)
                            }
                            
                        </div>
                        <div className="pl-3">
                            <p className="text-sm font-medium text-gray-800 leading-none">
                                {
                                    isFavorite ? "Favorito" : "No es favorito"
                                }
                            </p>
                            <p className="text-xs text-gray-500">View your campaigns</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
