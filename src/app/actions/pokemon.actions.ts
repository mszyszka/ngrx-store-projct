import { Injectable } from '@angular/core'
import { Action } from '@ngrx/store'
import { Pokemon } from './../models/pokemon.model'

export const ADD_POKEMON       = '[POKEMON] Add'
export const REMOVE_POKEMON    = '[POKEMON] Remove'

export class AddPokemon implements Action {
    readonly type = ADD_POKEMON

    constructor(public payload: Pokemon) {}
}

export class RemovePokemon implements Action {
    readonly type = REMOVE_POKEMON

    constructor(public payload: number) {}
}

export type Actions = AddPokemon | RemovePokemon