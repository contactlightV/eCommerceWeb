import React, { useContext } from "react";
import OrderItem from '@components/OrderItem.jsx';
import AppContext from '@context/AppContext.js';
import '@styles/MyOrder.scss';
import arrow from '@icons/flechita.svg';

const MyOrder = () => {
    const { state } = useContext(AppContext)

    const sumTotal = () => {
        const reducer = (accu, currentValue) => accu + currentValue.price;
        const sum = state.cart.reduce(reducer, 0);
        return sum;
    }

    return(
            <aside class="MyOrder">
                <div class="title-container">
                    <img src={arrow} alt="arrow" />
                    <p>Shopping cart</p>
                </div>
                <div class="my-order-content">
                    {state.cart.map(product => (
                        <OrderItem product={product} key={`orderItem-${product.id}`} />
                    ))}
                    <div class="order">
                        <p>
                            <span>Total</span>
                        </p>
                        <p>${sumTotal()}</p>
                    </div>
                    <button class="primary-button">Checkout</button> 
                </div>
            </aside>
    );
}

export default  MyOrder;