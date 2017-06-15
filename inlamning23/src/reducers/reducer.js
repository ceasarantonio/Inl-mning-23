import {CHANGE_TAB, CART, HISTORY, ADD_PRODUCT, REMOVE_FROM_CART, ADD_TO_CART  } from '../action/action.js' 

function tabReducer(state = 1, action) {
	switch( action.type ) {
		case CHANGE_TAB:
			return  action.tab;
		default:
			return state;
	}
}

function cartReducer(state = [], action ) {
  switch ( action.type ) {
    case ADD_TO_CART:
      return [...state, action.product];
    case REMOVE_FROM_CART:
      return state.filter((item) => action.product !== item );
    default:
        return state;
  }
}

function historyReducer(state = [], action ) {
  switch ( action.type ) {
    case HISTORY:
      return [...state, action.action];
    default:
      return state;
  }
}

function productReducer(state = [], action ) {
  switch ( action.type ) {
    case ADD_PRODUCT:
      return [...state, action.product];
    default:
      return state;
                       }
}
export {tabReducer, cartReducer, historyReducer, productReducer};