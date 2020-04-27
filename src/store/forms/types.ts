import { ApiResponse } from '../apiResponse';

export interface Generic {
    name: string | any;
    url: string | any;
}

export interface Form {
    id: number;
    [key: string]: any;
}

export enum FormActionTypes {
    FETCH_REQUEST = '@@forms/FETCH_REQUEST',
    FETCH_ITEM_REQUEST = '@@forms/FETCH_ITEM_REQUEST',
    FETCH_SUCCESS = '@@forms/FETCH_SUCCESS',
    FETCH_ITEM_SUCCESS = '@@forms/FETCH_ITEM_SUCCESS',
    FETCH_ERROR = '@@forms/FETCH_ERROR',
    SELECT_POKEMON = '@@forms/SELECT_POKEMON',
    SELECTED = '@@forms/SELECTED',
}

export interface FormState {
    readonly loading: boolean;
    readonly data: Form[];
    readonly item: Form | any;
    readonly errors?: string;
}
