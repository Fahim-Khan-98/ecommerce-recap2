import React, { useState, useEffect } from 'react';

import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';


const Shop = () => {
    const [products, setProducts] = useState([]);
    const [carts, setCarts] = useState([]);
    const [displayProducts, setDisplayProducts] =  useState([]);


    useEffect( ()=>{
        // console.log('product api called');
    fetch('./products.json')
    .then(res => res.json())
    .then(data => {
        // console.log('product received');
    
        setProducts(data);
        setDisplayProducts(data);
    })
  } ,[])

    useEffect( () =>{

        if (products.length){
            const saveCart = getShoppingCart();
            
            const storedCart=[];
            for (const key in saveCart){
                // console.log(key, saveCart[key]);
                let addedProduct = products.find(product => product.id === key);
        
                if (addedProduct){
                    const quantity = saveCart[key];
                    addedProduct.quantity=quantity;
                    storedCart.push(addedProduct);
       
                }
                
        }
        // console.log(storedCart);
        setCarts(storedCart);
        }
    },[products]) 
    


    const handleAddToCart=(product)=>{
        const newCart = [...carts,product];
        setCarts(newCart);
        addToDb(product.id);
       
        
    }

    const handleSearchEvent = event =>{
        const searchProduct = event.target.value;

        const matchedProduct = products.filter(product =>  product.name.toLowerCase().includes(searchProduct.toLowerCase()) );
        setDisplayProducts(matchedProduct)
        // console.log(matchedProduct)
    }

    return (
        <>
            <div className="search-container">
                <input onChange={handleSearchEvent} type="search" placeholder='Search Product' />
            </div>

            <div className='shop-container'>
        
                <div className="product-container">
                    <h3>Products: {products.length}</h3>
                    {
                    displayProducts.map(product => <Product
                    key={product.key}
                    product={product}
                    handleAddToCart = {handleAddToCart}
                    ></Product>)
                    }
                    
                </div>
                <div className="cart-container">
                    <Cart carts={carts}></Cart>
                </div>

            </div>
        </>
    );
};

export default Shop;