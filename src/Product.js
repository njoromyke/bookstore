import React from 'react'
import "./product.css"
import { UseStateValue } from './StateProvider';
function Product({ id, title, image, price ,rating }) {
    const [{basket},dispatch]=UseStateValue();

    console.log("this is the basket >>>", basket);
 
    const addToBasket= ()=>{
//dispatch the item into the data layer
dispatch({
    type:'ADD TO BASKET',
    item:{
        id: id,
        title: title,
        image:image,
        price:price,
        rating:rating,

    },
});
};


    return (
        <div className="product">
                <div className="product__info">
                    <p>{title}</p>
                    <p className="product__price">
                     <small>ksh.</small>
                     <strong>{price}</strong>

                </p>
                <div className="product__rating">
                    {Array(rating)
                    .fill()
                    .map((_, i) => (
                        <p>⭐</p>
                    ))}

                    </div>
            </div>
            
             <img src={image}alt="vitabuu"/>
            
            <button onClick={addToBasket}>Add To Basket</button>
        
    </div>
    );
}

export default Product
