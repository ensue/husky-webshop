import Directory from "./components/directory/directory-component.jsx";

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
    title: "Montaż",
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
    title: "PVC",
    imageUrl:
      "https://ensue.github.io/husky-webshop/public/resources/img/pvc2.png",
    // "https://ensue.github.io/husky-webshop/public/resources/img/pvc.png",
  },
];

const App = () => {
  return <Directory categories={categories} />;
};
export default App;
