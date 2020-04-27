import { action } from 'typesafe-actions';
import { AbilityActionTypes, Ability } from './types';

export const fetchRequest = () => action(AbilityActionTypes.FETCH_REQUEST);
export const fetchItemRequest = (name: string) =>
    action(AbilityActionTypes.FETCH_ITEM_REQUEST, name);

export const fetchSuccess = (data: Ability[]) => action(AbilityActionTypes.FETCH_SUCCESS, data);
export const fetchItemSuccess = (item: Ability) =>
    action(AbilityActionTypes.FETCH_ITEM_SUCCESS, item);
export const fetchError = (message: string) => action(AbilityActionTypes.FETCH_ERROR, message);
