import { ApiResponse } from '../apiResponse';
export interface Pokemon {
    id: number;
    name: string;
    url: string;
    abilities?: Array<any>;
    base_experience?: number;
    forms?: Array<any>;
    game_indices?: Array<any>;
    height?: number;
    weight?: number;
    order?: number;
    held_items?: Array<any>;
    is_default?: boolean;
    location_area_encounters?: string;
    moves?: Array<any>;
    species?: any;
    sprites?: any;
    stats?: Array<any>;
    types?: Array<any>;
}

export enum PokemonActionTypes {
    FETCH_REQUEST = '@@pokemons/FETCH_REQUEST',
    FETCH_ITEM_REQUEST = '@@pokemons/FETCH_ITEM_REQUEST',
    FETCH_SUCCESS = '@@pokemons/FETCH_SUCCESS',
    FETCH_ITEM_SUCCESS = '@@pokemons/FETCH_ITEM_SUCCESS',
    FETCH_ERROR = '@@pokemons/FETCH_ERROR',
    SELECT_POKEMON = '@@pokemons/SELECT_POKEMON',
    SELECTED = '@@pokemons/SELECTED',
}

export interface PokemonState {
    readonly loading: boolean;
    readonly data: Pokemon[];
    readonly item: Pokemon | any;
    readonly errors?: string;
}
