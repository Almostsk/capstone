import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import {
  CheckoutItemContainer,
  CheckoutImgContainer,
  CheckoutRemoveBtn,
  ItemInfo,
  ItemQuantity,
  ItemArrow,
  ItemValue,
} from "./checkout-item.styles";

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const { clearItemFromCart, addItemToCart, removeItemFromCart } =
    useContext(CartContext);

  const clearItemHandler = () => clearItemFromCart(cartItem);
  const addItemHandler = () => addItemToCart(cartItem);
  const removeItemHandler = () => removeItemFromCart(cartItem);

  return (
    <CheckoutItemContainer className="checkout-item-container">
      <CheckoutImgContainer className="image-container">
        <img src={imageUrl} alt={name} />
      </CheckoutImgContainer>
      <ItemInfo className="checkout-item-name">{name}</ItemInfo>
      <ItemQuantity className="checkout-item-quantity">
        <ItemArrow className="arrow" onClick={removeItemHandler}>
          &#10094;
        </ItemArrow>
        <ItemValue className="value">{quantity}</ItemValue>
        <ItemArrow className="arrow" onClick={addItemHandler}>
          &#10095;
        </ItemArrow>
      </ItemQuantity>
      <ItemInfo className="checkout-item-price">{price}</ItemInfo>
      <CheckoutRemoveBtn
        className="checkout-remove-btn"
        onClick={clearItemHandler}
      >
        &#10005;
      </CheckoutRemoveBtn>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
