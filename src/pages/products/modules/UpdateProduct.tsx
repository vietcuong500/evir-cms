import { useUpdatePost } from "hooks/posts";
import { useDeleteProduct, useUpdateProduct } from "hooks/product";
import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import ProductProvider from "./ProductProvider";

function UpdateProduct() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { state } = useLocation();
  const { mutateAsync: onDelete } = useDeleteProduct();
  const { isPending, mutateAsync } = useUpdateProduct();
  const handleSubmit = (data: any) => {
    mutateAsync(data);
  };
  const handleDelete = async () => {
    const res = await onDelete(Number(id));
    if (res.code === 200 || res.code === 0) {
      navigate("/products");
    }
  };
  return (
    <ProductProvider
      handleSubmit={handleSubmit}
      loadingSubmit={isPending}
      defaultValues={state?.item}
      handleDelete={handleDelete}
    />
  );
}

export default UpdateProduct;
