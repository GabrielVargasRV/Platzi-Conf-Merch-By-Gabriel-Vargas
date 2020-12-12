import { useState,useEffect } from 'react';
import axios from 'axios';
import initialState from '../initialState.js';

const API = 'http://localhost:3007/products'


const useInitialState = () => {
    const [state,setState] = useState(initialState);
    const [products,setProducts] = useState([]);

    useEffect(async () => {
        const response = await axios(API)
        setProducts(response.data)
    },[])
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
        products,
        state,
    }
};

export default useInitialState;