import {
  CartItemContainer,
  CartItemDetails,
  CartItemName,
} from "./cart-item.styles";

const CartItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <CartItemContainer className="cart-item-container">
      <img src={imageUrl} alt={name} />
      <CartItemDetails className="cart-item-details">
        <CartItemName className="cart-item-name">{name}</CartItemName>
        <span className="cart-item-price">
          {quantity} x ${price}
        </span>
      </CartItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;
