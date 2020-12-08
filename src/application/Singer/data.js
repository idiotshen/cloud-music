import React, { createContext, useReducer } from 'react';
import { fromJS } from 'immutable';

export const CategoryDataContext = createContext({});

export const CNHANE_CATEGORY = 'singers/CHANGE_CATEGORY';
export const CHANGE_ALPHA = 'singers/CHANGE_ALPHA';

const reducer = (state, action) => {
    switch (action.type) {
        case CNHANE_CATEGORY:
            return state.set('category', action.data);
        case CHANGE_ALPHA:
            return state.set('alpha', action.data);
        default:
            return state;
    }
}

export const Data = props => {
    const [data, dispatch] = useReducer(reducer, fromJS({
        category: '',
        alpha: '',
        singerList: []
    }));

    return (
        <CategoryDataContext.Provider value={{data, dispatch}}>
            {props.children}
        </CategoryDataContext.Provider>
    )
}