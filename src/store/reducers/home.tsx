import {AnyAction} from 'redux';
import * as types from '../action-types';
export interface HomeState {
    title: string;
    currentCategory: string;
}
const initialState = {
    title: '首页',
    currentCategory: 'all'
};
function reducer(state: HomeState = initialState, action: AnyAction):HomeState {
    switch(action.type) {
    case types.SET_CURRENT_CATEGORY:
        return {...state, currentCategory: action.payload};
    default:
        return state;
    }
}

export default reducer;