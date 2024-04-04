import { SimplePokemons } from '@/pokemons';
import { createSlice, PayloadAction } from '@reduxjs/toolkit'


interface PokemonState {
    favorites: { [key : string] : SimplePokemons },
}

const initialState : PokemonState = {
  favorites: {},
}

const pokemonSlice = createSlice({
  name: "pokemons",
  initialState,
  reducers: {
    setFavoritePokemons(state, action : PayloadAction<{ [key : string] : SimplePokemons }>) {
      state.favorites = action.payload
    },

    toggleFavorite(state, action : PayloadAction<SimplePokemons>) {
        const pokemon = action.payload;
        const { id } = pokemon;

        if(!!state.favorites[id]) {
            delete state.favorites[id]
            return;
        }

        state.favorites[id] = pokemon;
    }
  }
});

export const { toggleFavorite, setFavoritePokemons } = pokemonSlice.actions

export default pokemonSlice.reducer