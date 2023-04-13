
import { useSelector } from "react-redux";
import {
  selectCartItems,
  selectCartTotal,
} from "../../store/cart/cart.selector";

import {
  CheckoutContainer,
  CheckoutHeader,
  HeaderBlock,
  Total,
} from "./checkout.styles";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import PaymentForm from "../../components/payment-form/payment-form.component";

const Checkout = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);
  return (
    <CheckoutContainer>
      <CheckoutHeader>
        <HeaderBlock>
          <span>Produkt</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Opis</span>
        </HeaderBlock>
        {/* <HeaderBlock>
          <span>Symbol</span>
        </HeaderBlock> */}
        <HeaderBlock>
          <span>Ilość</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Cena</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Usuń</span>
        </HeaderBlock>
      </CheckoutHeader>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <Total>{cartTotal} zł</Total>

      <PaymentForm />
    </CheckoutContainer>
  );
};

export default Checkout;

//   const cartTotal = useSelector(selectCartTotal);
//   return (
//     <div className="checkout-container">
//       <div className="checkout-header">
//         <div className="header-block">
//           <span>Produkt</span>
//         </div>

//         <div className="symbol-qty-price-remove">
//           <div className="header-block">
//             <span>Kod</span>
//           </div>
//           <div className="header-block">
//             <span>Ilość</span>
//           </div>
//           <div className="header-block">
//             <span>Cena netto</span>
//           </div>
//           <div className="header-block">
//             <span>Usuń</span>
//           </div>
//         </div>
//       </div>
//       {cartItems.map((cartItem) => (
//         <CheckoutItem key={cartItem.id} cartItem={cartItem} />
//       ))}
//       <div className="total">{cartTotal} zł</div>
//     </div>
//   );
// };

// export default Checkout;
