import { action } from 'typesafe-actions';
import { PokemonActionTypes, Pokemon } from './types';

export const fetchRequest = () => action(PokemonActionTypes.FETCH_REQUEST);
export const fetchItemRequest = (name: string) =>
    action(PokemonActionTypes.FETCH_ITEM_REQUEST, name);

export const fetchSuccess = (data: Pokemon[]) => action(PokemonActionTypes.FETCH_SUCCESS, data);
export const fetchItemSuccess = (item: Pokemon) =>
    action(PokemonActionTypes.FETCH_ITEM_SUCCESS, item);
export const fetchError = (message: string) => action(PokemonActionTypes.FETCH_ERROR, message);
