import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import React, { useEffect, useCallback, useMemo } from "react";

import ProductComponent from "./ProductComponent";
import { setProduct } from "../actions/productActions";

const ProductPage = () => {
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products`)
      .catch((err) => console.log(err));

    dispatch(setProduct(response.data));
  };

  useEffect(() => fetchProducts(), []);

  return (
    <div className="ui grid container ">
      <ProductComponent />
    </div>
  );
};

export default ProductPage;
