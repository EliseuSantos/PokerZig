import { ApiResponse } from '../apiResponse';

export interface Generic {
    name: string | any;
    url: string | any;
}

export interface Ability {
    id: number;
    [key: string]: any;
}

export enum AbilityActionTypes {
    FETCH_REQUEST = '@@abilities/FETCH_REQUEST',
    FETCH_ITEM_REQUEST = '@@abilities/FETCH_ITEM_REQUEST',
    FETCH_SUCCESS = '@@abilities/FETCH_SUCCESS',
    FETCH_ITEM_SUCCESS = '@@abilities/FETCH_ITEM_SUCCESS',
    FETCH_ERROR = '@@abilities/FETCH_ERROR',
    SELECT_POKEMON = '@@abilities/SELECT_POKEMON',
    SELECTED = '@@abilities/SELECTED',
}

export interface AbilityState {
    readonly loading: boolean;
    readonly data: Ability[];
    readonly item: Ability | any;
    readonly errors?: string;
}
