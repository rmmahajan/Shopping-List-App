import { GET_ITEMS, ADD_ITEMS, DELETE_ITEM } from './types';

export const getItems = () => {
    return{
        type:GET_ITEMS
    };
};