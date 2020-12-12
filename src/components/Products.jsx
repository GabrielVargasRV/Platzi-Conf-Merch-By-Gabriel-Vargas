import React, { useContext } from 'react';
import Product from './Product.jsx';
import AppContext from '../context/AppContext.js';
import '../style/components/Products.css';

const Products = () => {
    const {state,addToCart} = useContext(AppContext);
    const { products } = state;

    const handleAddToCart = product => () => {
        addToCart(product)
        console.log(product)
    }

    return(
        <div className="Products">
            <div className="Products-items">
                {products.map(product => (
                    <Product  product={product} handleAddToCart={handleAddToCart} />
                ))}
            </div>
        </div>
    );
}

export default Products;