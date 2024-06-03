import React from 'react';
import './Product.css';
import Rating from 'react-rating';

const Product = (props) => {

    const {name,category,price,img,seller,stock,ratings} = props.product
    return (
        <div className='product'>
            <div>
                <img src={img}></img>
            </div>
          
            <div>
                <h3 className='product-name'>Name : {name}</h3>
                <p><small>by : {seller}</small></p>
                <h4>Category : {category}</h4>ratings
                <h5>$ {price}</h5>
                <p><small>only {stock} left in stock- order soon</small></p>
                <p><small>ratings: {ratings}</small></p>
                <Rating 
                initialRating={ratings}
                emptySymbol="far fa-star icon-color"
                fullSymbol="fas fa-star icon-color" 
                readonly></Rating>
             <br></br>
                <button onClick={ ()=> props.handleAddToCart(props.product)}  className='btn-regular'>Add to cart</button>
            </div>
            
            {/* onClick={ () => props.handleAddToCart(props.product)} */}

        </div>
    );
};

export default Product;