import React from 'react';

const Cart = (props) => {
    // console.log(props.carts);
   let total=0;
   let totalQuantity = 0
   for (const product of props.carts){
    // total = total+product.price;
    if (!product.quantity){
        product.quantity=1;
    }
    totalQuantity = totalQuantity+product.quantity; 
    total = total+product.price*product.quantity;
    
   }
    return (
        <div>
             <h2> Order Summery</h2>
                <h3>Item Ordered {totalQuantity}</h3>
                <h4>Total Price: ${total}</h4>
        </div>
    );
};

export default Cart;