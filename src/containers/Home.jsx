import React from 'react';
import initialState from '../initialState.js'
import Products from '../components/Products.jsx';


const Home = () => {
    return(
        <Products products={initialState.products}/>
    );
}

export default Home;