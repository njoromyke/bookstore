import React from 'react';
import'./CheckOutProduct.css'
import { UseStateValue } from './StateProvider';

function CheckOutProduct({ id,image,title,price,rating}) {
    const[{basket},dispatch]=UseStateValue();
    const removeFromBasket=()=>{
        //remove the item from the basket
        dispatch({
            type:'REMOVE_FROM_BASKET',
            id: id,
        })
    }
    return (
        <div className="CheckOutProduct">
            <img className='CheckOutProduct__image'src={image} 
            />
            <div className="CheckOutProduct__info">
<p className="CheckOutProduct__title">{title}</p>
<p className="CheckOutProduct__price">
<small>ksh</small>
<strong>{price}</strong>
</p>
<div className="CheckOutProduct__rating">
                    {Array(rating)
                    .fill()
                    .map((_, i) => (
                        <p>⭐</p>
                    ))}

            </div>
            <button onClick={removeFromBasket}>Remove From Basket
            </button>
            </div>
        </div>
    );
}

export default CheckOutProduct
