import "./directory-item.styles.scss";

export default function DirectoryItem({ category }) {
  const { imageUrl, title, id } = category;
  return (
    <div key={id} className="directory-item-container">
      {/* <img /> */}
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="directory-item-body">
        <h2>{title}</h2>
        <p>Shop now</p>
      </div>
    </div>
  );
}
