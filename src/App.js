import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import ProductDetails from "./components/ProductDetails";
import ProductListing from "./components/ProductListing";
import ProductComponent from "./components/ProductComponent";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route to="/" element={<ProductListing />}>
            <Route to="productdetails" element={<ProductDetails />} />
            <Route to="*" element={<div>404 Not Found!</div>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
