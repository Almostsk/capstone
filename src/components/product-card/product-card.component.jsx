import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import {
  ProductCardContainer,
  ProductCardFooter,
  ProductName,
  ProductPrice,
} from "./product-card.styles";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => addItemToCart(product);
  return (
    <ProductCardContainer className="product-card-container">
      <img src={imageUrl} alt={name} />
      <ProductCardFooter className="product-card-footer">
        <ProductName className="product-name">{name}</ProductName>
        <ProductPrice className="product-price">{price}</ProductPrice>
      </ProductCardFooter>
      <Button type={BUTTON_TYPE_CLASSES.inverted} onClick={addProductToCart}>
        Add to cart
      </Button>
    </ProductCardContainer>
  );
};

export default ProductCard;
