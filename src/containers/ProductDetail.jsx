import React from "react";
import ProductInfo from "../components/ProductInfo";
import '../styles/ProductDetail.scss';
import icon_close from '@icons/icon_close.png';

const ProductDetail = () => {
    return(
        <aside class="product-detail">
            <div class="product-detail-close">
                <img src={icon_close} alt="icon_close" /> 
            </div>
            <ProductInfo />
        </aside>
    );
}

export default ProductDetail;