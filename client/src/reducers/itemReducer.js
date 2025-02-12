import { v1 as uuid } from 'uuid';
import { GET_ITEMS, ADD_ITEMS, DELETE_ITEM } from '../actions/types';

const initialState = {
    items: [
        { id: uuid() , name: 'Eggs'},
        { id: uuid() , name: 'Milk'},
        { id: uuid() , name: 'Shoes'},
        { id: uuid() , name: 'Shirt'},
        { id: uuid() , name: 'Box'}
    ] 
}

export default function(state = initialState, action){
    switch(action.type){

        case GET_ITEMS:
            return{
                ...state
            }
        default:
            return state;
    }
}