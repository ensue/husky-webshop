import "./checkout-item.styles.scss";

const CheckoutItem = ({ checkoutItem }) => {
  const { imageUrl, price, name, quantity } = checkoutItem;
  return (
    <div>
      <img src={imageUrl} alt={`${name}`} />
      <div>{name}</div>
      <div>{quantity}</div>
      <div>{price}</div>
      <div>
        <button>Remove</button>
      </div>
    </div>
  );
};

export default CheckoutItem;
