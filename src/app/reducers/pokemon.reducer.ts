import { Action } from '@ngrx/store'
import { Pokemon } from './../models/pokemon.model'
import * as PokemonActions from './../actions/pokemon.actions'

const initialState: Pokemon = {
    name: 'Initial Pokemon',
    url: 'https://www.youtube.com/watch?v=ybqtpQiiOSE'
}

export function reducer(state: Pokemon[] = [initialState], action: PokemonActions.Actions) {

    switch(action.type) {
        case PokemonActions.ADD_POKEMON:
            return [...state, action.payload];
        
        case PokemonActions.REMOVE_POKEMON:
            state.splice(action.payload, 1)
            return state;
            
        default:
            return state;
    }
}