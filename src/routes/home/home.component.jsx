import { Outlet } from "react-router-dom";
import Directory from "../../components/directory/directory-component";

const Home = () => {
  const categories = [
    {
      id: 1,
      title: "zestawy",
      imageUrl:
        "https://ensue.github.io/husky-webshop/public/resources/img/vacuum1.png",
      // "https://ensue.github.io/husky-webshop/public/resources/img/zestaw.png",
    },
    {
      id: 2,
      title: "akcesoria",
      imageUrl:
        "https://ensue.github.io/husky-webshop/public/resources/img/brush.png",
      // "https://ensue.github.io/husky-webshop/public/resources/img/zestawsp.png",
    },
    {
      id: 3,
      title: "montaż",
      imageUrl:
        "https://ensue.github.io/husky-webshop/public/resources/img/installation2.png",
      // "https://ensue.github.io/husky-webshop/public/resources/img/szufelka.png",
    },
    {
      id: 4,
      title: "odkurzacze",
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

  return (
    <div>
      <Outlet />
      <Directory categories={categories} />
    </div>
  );
};
export default Home;
