import React from "react";
import '../styles/ShoppingCartItem.scss'

const ShoppingCartItem = () => {
    return(
        <div className="ShoppingCartItem">
            <figure>
                <img src="https://images.pexels.com/photos/1090638/pexels-photo-1090638.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="shelf" />
            </figure>
            <p>Shelf</p>
            <p>$120,00</p>
        </div>

    );
}

export default ShoppingCartItem;