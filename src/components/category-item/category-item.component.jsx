import "./category-item.styles.scss";

const CategoryItem = ({ category: { imageUrl, title } }) => (
  <div className="category-container">
    <div className="category-container">
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />

      <div className="category-body-container">
        <h2>{title}</h2>
        <p>przeglądaj</p>
      </div>
    </div>
  </div>
);

export default CategoryItem;
