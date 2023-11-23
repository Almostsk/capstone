import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import {
  CheckoutContainer,
  CheckoutHeader,
  CheckoutHeaderBlock,
  CheckoutTotal,
} from "./checkout.styles";

const Checkout = () => {
  const { cartItems, cartTotal } = useContext(CartContext);

  return (
    <CheckoutContainer className="checkout-container">
      <CheckoutHeader className="checkout-header">
        <CheckoutHeaderBlock className="header-block">
          <span>Product</span>
        </CheckoutHeaderBlock>
        <CheckoutHeaderBlock className="header-block">
          <span>Description</span>
        </CheckoutHeaderBlock>
        <CheckoutHeaderBlock className="header-block">
          <span>Quantity</span>
        </CheckoutHeaderBlock>
        <CheckoutHeaderBlock className="header-block">
          <span>Price</span>
        </CheckoutHeaderBlock>
        <CheckoutHeaderBlock className="header-block">
          <span>Remove</span>
        </CheckoutHeaderBlock>
      </CheckoutHeader>
      {cartItems.map((cartItem) => {
        return <CheckoutItem key={cartItem.id} cartItem={cartItem} />;
      })}
      <CheckoutTotal className="total">Total: ${cartTotal}</CheckoutTotal>
    </CheckoutContainer>
  );
};

export default Checkout;
