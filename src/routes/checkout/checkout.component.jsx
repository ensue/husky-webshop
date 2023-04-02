import { useSelector } from "react-redux";
import {
  selectCartItems,
  selectCartTotal,
} from "../../store/cart/cart.selector";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import "./checkout.styles.scss";

const Checkout = () => {
  // const { cartItems, cartTotal } = useContext(CartContext);
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);
  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Produkt</span>
        </div>

        <div className="symbol-qty-price-remove">
          <div className="header-block">
            <span>Kod</span>
          </div>
          <div className="header-block">
            <span>Ilość</span>
          </div>
          <div className="header-block">
            <span>Cena netto</span>
          </div>
          <div className="header-block">
            <span>Usuń</span>
          </div>
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
