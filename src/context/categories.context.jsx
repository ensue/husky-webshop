import { createContext, useState, useEffect } from "react";
import {
  addCollectionAndDocuments,
  getCategoriesAndDocuments,
} from "../utils/firebase/firebase.utils";
import SHOP_DATA from "../shop";

export const CategoriesContext = createContext({
  categoriesMap: {},
});

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      setCategoriesMap(categoryMap);
    };
    getCategoriesMap();
  }, []);
  
  // import SHOP_DATA to firestore once
  useEffect(()=>{
    addCollectionAndDocuments('categories',SHOP_DATA);
  }, [])

  const value = { categoriesMap };

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};