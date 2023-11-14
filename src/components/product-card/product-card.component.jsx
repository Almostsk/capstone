import "./product-card.styles.scss";
import Button from "../button/button.component";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={name} />
      <div className="footer">
        <spna className="name">{name}</spna>
        <spna className="price">{price}</spna>
      </div>
      <Button type="inverted">Add to cart</Button>
    </div>
  );
};

export default ProductCard;
