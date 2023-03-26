import "./checkout.styles.scss";
import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";

const Checkout = () => {
  const { cartItems } = useContext(CartContext);
  const cartTotal = () => {
    let sum = 0;
    cartItems.forEach(({ price, quantity }) => {
      sum += price * quantity;
    });
    return sum;
  };

  return (
    <div>
      <div>
        {cartItems.map((item) => (
          <CheckoutItem key={item.id} checkoutItem={item} />
        ))}
      </div>
      <div>
        <span>Łącznie: {cartTotal()}</span>
      </div>
    </div>
  );
};

export default Checkout;
