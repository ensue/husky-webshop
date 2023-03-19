const App = () => {
  const categories = [
    {
      id: 1,
      title: "Zestawy",
    },
    {
      id: 2,
      title: "Szczotki",
    },
    {
      id: 3,
      title: "Akcesoria",
    },
    {
      id: 4,
      title: "Odkurzacze",
    },
    {
      id: 5,
      title: "Elementy instalacji",
    },
  ];

  return (
    <div className="categories-container">
      {categories.map(({ title }) => (
        <div className="category-container">
          {/* {<img src="" alt="">} */}
          <div className="category-body-container">
            <h2>{title}</h2>
            <p>Cennik</p>
          </div>
        </div>
      ))}
    </div>
  );

  //Zestawy Szczotki Akcesoria Odkurzacze Elementy instalacji
};
export default App;
