'use client';

import { Provider } from 'react-redux';
import { store } from '.';
import { useEffect } from 'react';
import { setFavoritePokemons } from './pokemon/pokemon';

interface Props {
    children: React.ReactNode
}

export const ProviderComponent = ( { children } : Props ) => {

  useEffect(() => {
    const pokemons = JSON.parse(localStorage.getItem("favorite-pokemons") ?? "{}");
    
    store.dispatch(setFavoritePokemons(pokemons))


  }, [])

  return (
    <Provider store={ store }>
        { children }
    </Provider>
  )
}
