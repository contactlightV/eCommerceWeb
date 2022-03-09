import React from "react";
import ShoppingCartItem from '../components/ShoppingCartItem.jsx';
import '../styles/Orders.scss';

const Orders = () => {
    return(
        <div class="my-order">
        <div class="my-order-container">
            <h1 class="title">My orders</h1>
            <div class="my-order-content">
                <ShoppingCartItem />
            </div>
        </div>
    </div>
    );
}

export default Orders;