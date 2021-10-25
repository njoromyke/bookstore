import React from 'react';
import"./checkout.css";
import Subtotal from './Subtotal';
import { UseStateValue } from "./StateProvider";
import CheckOutProduct from "./CheckOutProduct";
function checkout() {
const[{basket}]=UseStateValue();

    return(
        <div className="checkout">
            <div className="checkout__left">
              <img className="checkout__ad"
               src="https://encrypted-tbn0.gstatic.
               com/images?q=tbn:ANd9GcSuIKbPht-
               n29Dm8QIxmatX5au-fRcdPJRGvA&usqp=CAU"
             alt="barner"
             />
{basket?.length===0?(
    <div>
        <h2>Your Shopping Basket is empty</h2>
        <p>
         You have no items in your basket. Click on "add to cart" to make a purchase.
        </p>
        </div>
         )  :(
             <div>
            <h2 className="checkout__title">Your shopping Basket</h2>
            {basket.map(item =>(
                <CheckOutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
                />
            ))}
            </div>
            )}
            </div>
            {basket.length>0 && (
            <div className="checkout__right">
                <Subtotal />
            </div>
            
            )}
       </div>     
    );
}

export default checkout;
