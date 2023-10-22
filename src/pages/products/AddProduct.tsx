import { Button, Divider, Input } from "antd";
import TextArea from "antd/es/input/TextArea";
import { useCreateProduct } from "hooks/product";
import React from "react";
import { useNavigate } from "react-router-dom";
import ProductCollection from "./components/ProductCollection";
import ProductInfo from "./components/ProductInfo";
import ProductInventory from "./components/ProductInventory";
import ProductPrice from "./components/ProductPrice";
import ProductStatus from "./components/ProductStatus";
import ProductVariants from "./components/ProductVariants";
import ProductProvider from "./modules/ProductProvider";

export interface ProductCreateModel {
  images: string | null;
  name: string;
  slug: string;
  description: string;
  about_the_product: string;
  how_to_use: string;
  price: number | null;
  stock: number | null;
}

function AddProduct() {
  const { mutateAsync, isPending } = useCreateProduct();
  const navigate = useNavigate();
  const handleSubmit = async (data: any) => {
    const res = await mutateAsync({
      ...data,
      slug: data.name.replaceAll(" ", "-"),
    });
    if (res.code === 0 || res.code === 200) {
      navigate(`/products/${res.data.id}`);
    }
  };

  return (
    <ProductProvider
      handleSubmit={handleSubmit}
      loadingSubmit={isPending}
      defaultValues={{
        images:
          "https://www.mountaingoatsoftware.com/uploads/blog/2016-09-06-what-is-a-product.png",
        name: "n111111",
        slug: "",
        description: "des",
        about_the_product: "nononon",
        how_to_use: "jojoasdf",
        price: 18000,
        stock: 89,
      }}
    />
  );
}

export default AddProduct;
