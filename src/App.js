import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { Routes, Route } from "react-router-dom";

import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import Authentication from "./routes/authentication/authentication.component";
import Shop from "./routes/shop/shop.component";
import Checkout from "./routes/checkout/checkout.component";
import { checkUserSession } from "./store/user/user.action";

import { addCollectionAndDocuments } from "./utils/firebase/firebase.utils";
import SHOP_DATA from "./shop";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, []);

  // useEffect(() => {;
  //   addCollectionAndDocuments("categories", SHOP_DATA);
  // }, []);

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="sklep/*" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="koszyk" element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;
