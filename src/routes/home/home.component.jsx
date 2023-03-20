import { Outlet } from "react-router-dom";
import Directory from "../../components/directory/directory-component";

const Home = () => {
  const categories = [
    {
      id: 1,
      title: "zestawy",
      imageUrl:
        // "https://ensue.github.io/husky-webshop/public/resources/img/vacuum1.png",
        // "https://ensue.github.io/husky-webshop/public/resources/img/zestaw.png",
        "https://ensue.github.io/husky-webshop/src/assets/bw_kit.png",
    },
    {
      id: 2,
      title: "akcesoria",
      imageUrl:
        // "https://ensue.github.io/husky-webshop/public/resources/img/brush.png",
        // "https://ensue.github.io/husky-webshop/public/resources/img/zestawsp.png",
        "https://ensue.github.io/husky-webshop/src/assets/bw_acc.png",
    },
    {
      id: 3,
      title: "instalacja",
      imageUrl:
        // "https://ensue.github.io/husky-webshop/public/resources/img/installation2.png",
        // "https://ensue.github.io/husky-webshop/public/resources/img/szufelka.png",
        "https://ensue.github.io/husky-webshop/src/assets/bw_inst2.png",
    },
    {
      id: 4,
      title: "jednostki centralne",
      imageUrl:
        // "https://ensue.github.io/husky-webshop/public/resources/img/units1.png",
        //"https://ensue.github.io/husky-webshop/public/resources/img/qair.png",
        "https://ensue.github.io/husky-webshop/src/assets/bw_unit.png",
    },
    {
      id: 5,
      title: "przewody powietrzne",
      imageUrl:
        // "https://ensue.github.io/husky-webshop/public/resources/img/pvc2.png",
        // "https://ensue.github.io/husky-webshop/public/resources/img/pvc.png",
        "https://ensue.github.io/husky-webshop/src/assets/bw_pvc.png",
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
