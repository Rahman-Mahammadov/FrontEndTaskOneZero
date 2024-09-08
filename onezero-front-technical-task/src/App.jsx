import Navbar from "./Components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ProductList } from "./Components/ProductList";


export const App = () => {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/category/:categoryquery" element={<ProductList />} />
        <Route path="" element={<ProductList />} />
      </Routes>
    </BrowserRouter>
  );
};
