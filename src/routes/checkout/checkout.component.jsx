import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import "./checkout.styles.scss";

const Checkout = () => {
  const { cartItems, cartTotal } = useContext(CartContext);

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Produkt</span>
        </div>
        <div className="header-block"></div>
        <div className="header-block">
          <span>Ilość</span>
        </div>
        <div className="header-block">
          <span>netto</span>
        </div>
        <div className="header-block">
          <span>Usuń</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className="total">{cartTotal} zł</div>
    </div>
  );
};

export default Checkout;
