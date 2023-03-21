import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/home.component.jsx";
import Navigation from "./routes/navigation/navigation.component.jsx";
import SignIn from "./routes/sign-in/sign-in.component.jsx";

const Shop = () => {
  return <h1>shop page</h1>;
};




const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="/sklep" element={<Shop />} />
        <Route path="/login" element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default App;
