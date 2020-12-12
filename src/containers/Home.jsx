import React from 'react';
import { Helmet } from 'react-helmet';
import initialState from '../initialState.js'
import Products from '../components/Products.jsx';


const Home = () => {
    return(
        <>
        <Helmet>
            <title>Platzi Conf Merch -Products</title>
        </Helmet>
        <Products products={initialState.products}/>
        </>
    );
}

export default Home;