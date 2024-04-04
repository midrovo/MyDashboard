import { Action, Dispatch, MiddlewareAPI } from "@reduxjs/toolkit";
import { RootState } from '../index';

export const localStorageMiddleware = (state : MiddlewareAPI) => {
    return (next : Dispatch) => (action : Action) => {

        next(action);

        if(action.type === "pokemons/toggleFavorite") {
            const  { pokemon } = state.getState() as RootState;
            localStorage.setItem("favorite-pokemons", JSON.stringify(pokemon));
            return;
        }

    }
}