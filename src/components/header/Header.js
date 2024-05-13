import "./header.scss";

import logo from "../../images/Logo.png";
import shoppingCart from "../../images/ShoppingCart.svg";
import linkedIn from "../../images/LinkedIn.svg";
import telegram from "../../images/Telegram.svg";
import facebook from "../../images/Facebook.svg";
// import itemCounter from "../../images/itemCounter.svg";

export default function Header() {
  return (
    <div className='topHeader'>
      <div className='icons'>
        <img src={logo} alt='logo' />
        <h3>Pages</h3>
        <img src={linkedIn} alt='linkedIn' />
        <img src={telegram} alt='telegram' />
        <img src={facebook} alt='facebook' />
      </div>

      <div className='buttons'>
        <div className='menu'>
          <h4>Home</h4>
          <h4>Pages</h4>
          <h4>About</h4>
          <h4>Services</h4>
          <h4>Contact</h4>
        </div>

        <div className='shoppingCart'>
          <img src={shoppingCart} alt='shoppingCart' />
          {/* <img src={itemCounter} alt='itemCounter' /> */}
          <h3>Order Today</h3>
        </div>
      </div>
    </div>
  );
}
