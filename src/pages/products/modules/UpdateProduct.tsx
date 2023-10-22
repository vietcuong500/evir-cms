import React from "react";
import { useLocation } from "react-router-dom";
import ProductProvider from "./ProductProvider";

function UpdateProduct() {
  const { state } = useLocation();
  const handleSubmit = () => {
    console.log("run");
  };
  return (
    <ProductProvider
      handleSubmit={handleSubmit}
      loadingSubmit={false}
      defaultValues={state?.item}
    />
  );
}

export default UpdateProduct;
