import React from 'react';
import img from '../../images/Logo.svg';
import './Header.css';

const Header = () => {
    return (
        <div className='header'>
            
            <img className='logo' src={img}></img>
            <nav>
                <a href="/shop">Shop</a>
                <a href="/order">Order Rview</a>
                <a href="/inventory">Manage Inventory</a>
                </nav>
 
        </div>
    );
};

export default Header;