import React from "react";
import OrderItem from "../components/OrderItem";
import '../styles/Checkout.scss';

const Checkout = () => {
    return(
        <div class="my-order">
            <div class="my-order-container">
                <h1 class="title">My order</h1>
                <div class="my-order-content">
                    <div class="order">
                        <p>
                            <span>04.25.21</span>
                            <span>6 articles</span>
                        </p>
                        <p>$560,00</p>
                    </div>
                </div>
                <OrderItem />
            </div>
        </div>
    );
}

export default Checkout;