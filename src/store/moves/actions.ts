import { action } from 'typesafe-actions';
import { MoveActionTypes, Move } from './types';

export const fetchRequest = () => action(MoveActionTypes.FETCH_REQUEST);
export const fetchItemRequest = (name: string) => action(MoveActionTypes.FETCH_ITEM_REQUEST, name);

export const fetchSuccess = (data: Move[]) => action(MoveActionTypes.FETCH_SUCCESS, data);
export const fetchItemSuccess = (item: Move) => action(MoveActionTypes.FETCH_ITEM_SUCCESS, item);
export const fetchError = (message: string) => action(MoveActionTypes.FETCH_ERROR, message);
