import DirectoryItem from '../directory-item/directory-item.component';
import { DirectoryContainer } from './directory.styles'

const categories = [
  {
    id: 1,
    title: "zestawy",
    route: 'sklep/zestawy',
    imageUrl:
      // "https://ensue.github.io/husky-webshop/public/resources/img/vacuum1.png",
      // "https://ensue.github.io/husky-webshop/public/resources/img/zestaw.png",
      "https://ensue.github.io/husky-webshop/src/assets/bw_kit.jpg",
  },
  {
    id: 2,
    title: "akcesoria",
    route: 'sklep/akcesoria',
    imageUrl:
      // "https://ensue.github.io/husky-webshop/public/resources/img/brush.png",
      // "https://ensue.github.io/husky-webshop/public/resources/img/zestawsp.png",
      "https://ensue.github.io/husky-webshop/src/assets/bw_acc.jpg",
  },
  {
    id: 3,
    title: "Instalacja",
    route: 'sklep/instalacja',
    imageUrl:
      // "https://ensue.github.io/husky-webshop/public/resources/img/installation2.png",
      // "https://ensue.github.io/husky-webshop/public/resources/img/szufelka.png",
      "https://ensue.github.io/husky-webshop/src/assets/bw_inst2.png",
  },
  {
    id: 4,
    title: "Jednostki centralne",
    route: 'sklep/jednostki%20centralne',
    imageUrl:
      // "https://ensue.github.io/husky-webshop/public/resources/img/units1.png",
      //"https://ensue.github.io/husky-webshop/public/resources/img/qair.png",
      "https://ensue.github.io/husky-webshop/src/assets/bw_unit.jpg",
  },
  {
    id: 5,
    title: "przewody powietrzne",
    route: 'sklep/przewody%20powietrzne',
    imageUrl:
      // "https://ensue.github.io/husky-webshop/public/resources/img/pvc2.png",
      // "https://ensue.github.io/husky-webshop/public/resources/img/pvc.png",
      "https://ensue.github.io/husky-webshop/src/assets/bw_pvc.jpg",
  },

];

const Directory = () => {
  return (
    <DirectoryContainer>
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </DirectoryContainer>
  );
};

export default Directory;