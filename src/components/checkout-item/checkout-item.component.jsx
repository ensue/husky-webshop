import { useSelector, useDispatch } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector";
import {
  addItemToCart,
  clearItemFromCart,
  removeItemFromCart,
} from "../../store/cart/cart.action";
import {
  CheckoutItemContainer,
  ImageContainer,
  BaseSpan,
  Quantity,
  Arrow,
  Value,
  RemoveButton,
} from './checkout-item.styles';

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, symbol, quantity } = cartItem;
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const clearItemHandler = () =>
    dispatch(clearItemFromCart(cartItems, cartItem));
  const addItemHandler = () => dispatch(addItemToCart(cartItems, cartItem));
  const removeItemHandler = () =>
    dispatch(removeItemFromCart(cartItems, cartItem));


    return (
      <CheckoutItemContainer>
        <ImageContainer>
          <img src={imageUrl} alt={`${name}`} />
        </ImageContainer>
        <BaseSpan> {name} </BaseSpan>
        <Quantity>
          <Arrow onClick={removeItemHandler}>&#10094;</Arrow>
          <Value>{quantity}</Value>
          <Arrow onClick={addItemHandler}>&#10095;</Arrow>
        </Quantity>
        <BaseSpan> {price}</BaseSpan>
        <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
      </CheckoutItemContainer>
    );
  };
  
  export default CheckoutItem;

//   return (
//     <div className="checkout-item-container">
//       <div className="image-container">
//         <img src={imageUrl} alt={`${name}`} />
//       </div>
//       <span className="name"> {name} </span>

//       <div className="symbol-qty-price-remove">
//         <span className="symbol"> {symbol} </span>
//         <span className="quantity">
//           <div className="arrow" onClick={removeItemHandler}>
//             &#10094;
//           </div>
//           <span className="value">{quantity}</span>
//           <div className="arrow" onClick={addItemHandler}>
//             &#10095;
//           </div>
//         </span>
//         <span className="price"> {price}</span>
//         <div className="remove-button" onClick={clearItemHandler}>
//           &#10005;
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CheckoutItem;
