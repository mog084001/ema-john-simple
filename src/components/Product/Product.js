import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css';

const Product = ({ product, handleAddToCart }) => {
    // const { product, handleAddToCart } = props;  //destucturing
    const { category, name, img, seller, price, ratings, ratingsCount, stock } = product;

    return (
        <div className='product'>
            <img src={img} alt="" onError={(e) => { e.target.setAttribute('src', 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/52b5fde5829a4a04820dacf50127b969_9366/Adicolor_Classics_Primeblue_SST_Track_Pants_Blue_H06714_21_model.jpg') }}></img>
            <div className='product-info'>
                <p className='product-category'>{category}</p>
                <p className='product-name'>{name}</p>
                <p>Price: ${price}</p>
                <p><small>Seller: {seller}</small></p>
                <p><small>Ratings: {ratings} stars</small></p>
                <p><small>RatingsCount: {ratingsCount}</small></p>
                <p><small>Stock: {stock}</small></p>
            </div>
            <button onClick={() => handleAddToCart(product)} className='btn-cart'>
                <p className='btn-text'>Add to Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;