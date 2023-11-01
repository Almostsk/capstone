import "./category-item.styles.scss";

export default function CategoryItem({ category }) {
  const { imageUrl, title, id } = category;
  return (
    <div key={id} className="category-container">
      {/* <img /> */}
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="category-body-container">
        <h2>{title}</h2>
        <p>Shop now</p>
      </div>
    </div>
  );
}
