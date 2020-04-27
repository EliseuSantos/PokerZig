import { action } from 'typesafe-actions';
import { FormActionTypes, Form } from './types';

export const fetchRequest = () => action(FormActionTypes.FETCH_REQUEST);
export const fetchItemRequest = (name: string) => action(FormActionTypes.FETCH_ITEM_REQUEST, name);

export const fetchSuccess = (data: Form[]) => action(FormActionTypes.FETCH_SUCCESS, data);
export const fetchItemSuccess = (item: Form) => action(FormActionTypes.FETCH_ITEM_SUCCESS, item);
export const fetchError = (message: string) => action(FormActionTypes.FETCH_ERROR, message);
