import { ADD_TO_CART } from '../../constants/types';

const initialState = {
    cartItems: [ ],
};

export const cartReducers = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                cartItems: [
                    ...state.cartItems,
                    action.payload
                ]
            }
    }
    return state;
}