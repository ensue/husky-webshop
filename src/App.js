import './categories.styles.scss'

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
      {categories.map(({ title, id }) => (
      
        <div key ={id} className="category-container">
          <div className = ''></div>
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
