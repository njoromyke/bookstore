import React from 'react';
import'./header.css';
import SearchIcon from"@material-ui/icons/Search";
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import {Link} from "react-router-dom"
import { UseStateValue } from "./StateProvider";
function header() {
const[{basket},dispatch]=UseStateValue();
return (
        <div className="header">
          <Link to="/">
            {/*logo for the business*/}
          <img
           className="header__logo"
           src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_zbFfar-utTRNPwZAGiasY
            tMf9d7vejlcnQ&usqp=CAU"alt="logo"
            />
        </Link >
        
        <div className="header__search">
          <input
          className="header__searchInput"
          type="text"/> 
          <SearchIcon
          className="header__searchIcon"/>  
          
        </div>
        
        <div className="header__nav">
          <Link to='/Login'>
          
          <div 
                className='header__option'>
          <span className='header__optionLineOne'> Hello Guest</span>
              <span className='header__optionLineTwo'>Sign In </span>
          </div>
          </Link>
          
          <div 
              className='header__option'>
            <span className='header__optionLineOne'>Returns</span>
          <span className='header__optionLineTwo'>& Orders</span>
               </div>
          <div className="header__option">
              <span
              className='header__optionLineOne'> Your</span>
              <span
              className='header__optionLineTwo'> Suggestions </span>
                   </div>
                   <Link to="/checkout">
                   <div className="header__optionBasket">
                     <ShoppingBasketIcon />
                   <span className="header__optionLineTwo 
                   header__basketCount">{basket?.length}</span>  
                    
             
            
            


                  </div>
                   </Link>
                </div>
             </div>
            
        
    );
}

export default header
