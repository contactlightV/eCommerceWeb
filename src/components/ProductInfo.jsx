import React from "react";
import '../styles/ProductInfo.scss'
import icon_shopping_cart from '@icons/bt_add_to_cart.svg';

const ProductInfo = () => {
    return(
        <div>
            <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="bike" />
            <div className="ProductInfo">
                <p>$35,00</p>
                <p>Bike</p>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                <button className="primary-button add-to-cart-button">
                <img src={icon_shopping_cart} alt="icon_shopping_cart" />
                Add to cart
                </button>
            </div>
        </div>

    );
}

export default ProductInfo;