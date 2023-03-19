import "./categories.styles.scss";

const App = () => {
  const categories = [
    {
      id: 1,
      title: "Zestawy",
      imageUrl:
        "https://ensue.github.io/husky-webshop/public/resources/img/vacuum1.png",
        // "https://ensue.github.io/husky-webshop/public/resources/img/zestaw.png",
    },
    {
      id: 2,
      title: "Akcesoria",
      imageUrl:
        "https://ensue.github.io/husky-webshop/public/resources/img/brush.png",
        // "https://ensue.github.io/husky-webshop/public/resources/img/zestawsp.png",
    },
    {
      id: 3,
      title: "Usługi montażowe",
      imageUrl:
        "https://ensue.github.io/husky-webshop/public/resources/img/installation2.png",
        // "https://ensue.github.io/husky-webshop/public/resources/img/szufelka.png",
    },
    {
      id: 4,
      title: "Odkurzacze",
      imageUrl:
        "https://ensue.github.io/husky-webshop/public/resources/img/units1.png",
        //"https://ensue.github.io/husky-webshop/public/resources/img/qair.png",
    },
    {
      id: 5,
      title: "Elementy instalacji",
      imageUrl:
        "https://ensue.github.io/husky-webshop/public/resources/img/pvc2.png",
        // "https://ensue.github.io/husky-webshop/public/resources/img/pvc.png",
    },
  ];

  return (
    <div className="categories-container">
      {categories.map(({ title, id, imageUrl }) => (
        <div key={id} className="category-container">
          <div
            className="background-image"
            style={{
              backgroundImage: `url(${imageUrl})`,
            }}
          />
          <div className="category-body-container">
            <h2>{title}</h2>
            <p>Przeglądaj</p>
          </div>
        </div>
      ))}
    </div>
  );
};
export default App;
