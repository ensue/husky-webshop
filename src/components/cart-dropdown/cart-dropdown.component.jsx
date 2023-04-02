import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import { selectCartItems } from "../../store/cart/cart.selector";
import {
  CartDropdownContainer,
  EmptyMessage,
  CartItems,
} from "./cart-dropdown.styles";

const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate("/koszyk");
  };

  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessage>Koszyk jest pusty</EmptyMessage>
        )}
      </CartItems>
      <Button onClick={goToCheckoutHandler}>KOSZYK</Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
