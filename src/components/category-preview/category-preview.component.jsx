import ProductCard from "../product-card/product-card.component";
import {
  CategoryPreviewContainer,
  CategoryPreviewBody,
  CategoryTitle,
} from "./category-preview.styles";

const CategoryPreview = ({ title, products }) => {
  return (
    <CategoryPreviewContainer className="category-preview-container">
      <h2>
        <CategoryTitle className="category-title" to={title}>
          {title.toUpperCase()}
        </CategoryTitle>
      </h2>
      <CategoryPreviewBody className="category-preview">
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </CategoryPreviewBody>
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;
