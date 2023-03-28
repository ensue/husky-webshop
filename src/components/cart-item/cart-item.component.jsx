import { CartItemContainer, ItemDetails } from "./cart-item.styles";

const CartItem = ({ cartItem }) => {
  const { imageUrl, price, name, quantity } = cartItem;

  return (
    <CartItemContainer>
      <img src={imageUrl} alt={`{name} zł`} />
      <ItemDetails>
        <span>{name}</span>
        <span>
          {quantity} x {price} zł
        </span>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;
