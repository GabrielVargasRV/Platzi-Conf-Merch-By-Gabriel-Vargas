import { useState } from 'react';
import initialState from '../initialState.js';

const useInitialState = () => {
    const [state,setState] = useState(initialState);
    const addToCart = payload => {
        setState({
            ...state,
            cart: [...state.cart, payload],
        });
    }

    const removeFromCart = payLoad => {
        setState({
            ...state,
            cart: state.cart.filter(items => items.id != payLoad.id),
        });
    }

    const addToBuyer = payload => {
        setState({
            ...state,
            buyer: [...state.buyer,payload]
        })
    }

    const addNewOrder = payload => {
        setState({
            ...state,
            orders: [...state.orders,payload]
        })
    }
    return{
        addToCart,
        removeFromCart,
        addToBuyer,
        state,
    }
};

export default useInitialState;