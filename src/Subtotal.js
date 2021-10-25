import React from 'react'
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format"
import { UseStateValue } from './StateProvider';
import { getBasketTotal } from './Reducer';
function Subtotal() {
    const[{basket},dispatch]=UseStateValue()
    return( <div className="Subtotal">
<CurrencyFormat
renderText={(value) => (
    <>
    <p> 
        Subtotal ({basket.length}items):
    <strong>{value}</strong>
    </p>
    <small className="Subtotal__gift">
    <input type="Checkbox" /> This order contains a gift
    </small>
    </>
    )}
    decimalScale={2}
    value={getBasketTotal(basket)}
    displayType={"text"}
    thousandSeparator={true}
    prefix={"ksh"}
    />
    <button>Proceed To Checkout</button>
   </div>

    );
    
}

export default Subtotal
