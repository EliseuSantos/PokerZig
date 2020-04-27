import { ApiResponse } from '../apiResponse';
export interface Sprites {
    back_default: string | any;
    back_female: string | any;
    back_shiny: string | any;
    back_shiny_female: string | any;
    front_default: string | any;
    front_female: string | any;
    front_shiny: string | any;
    front_shiny_female: string | any;
}

export interface Generic {
    name: string | any;
    url: string | any;
}

export interface Pokemon {
    id: number;
    name: string;
    url: string;
    abilities?: Array<{
        ability: Generic;
    }>;
    base_experience?: number;
    forms?: Array<Generic>;
    game_indices?: Array<any>;
    height?: number;
    weight?: number;
    order?: number;
    held_items?: Array<any>;
    is_default?: boolean;
    location_area_encounters?: string;
    moves?: Array<{
        move: Generic;
    }>;
    species?: any;
    sprites?: Sprites;
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
