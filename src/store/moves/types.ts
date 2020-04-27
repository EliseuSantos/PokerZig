import { ApiResponse } from '../apiResponse';

export interface Generic {
    name: string | any;
    url: string | any;
}

export interface Move {
    id: number;
    [key: string]: any;
}

export enum MoveActionTypes {
    FETCH_REQUEST = '@@moves/FETCH_REQUEST',
    FETCH_ITEM_REQUEST = '@@moves/FETCH_ITEM_REQUEST',
    FETCH_SUCCESS = '@@moves/FETCH_SUCCESS',
    FETCH_ITEM_SUCCESS = '@@moves/FETCH_ITEM_SUCCESS',
    FETCH_ERROR = '@@moves/FETCH_ERROR',
    SELECT_POKEMON = '@@moves/SELECT_POKEMON',
    SELECTED = '@@moves/SELECTED',
}

export interface MoveState {
    readonly loading: boolean;
    readonly data: Move[];
    readonly item: Move | any;
    readonly errors?: string;
}
