import { Button, Divider, Input } from "antd";
import TextArea from "antd/es/input/TextArea";
import React from "react";
import ProductCollection from "./components/ProductCollection";
import ProductInfo from "./components/ProductInfo";
import ProductInventory from "./components/ProductInventory";
import ProductPrice from "./components/ProductPrice";
import ProductStatus from "./components/ProductStatus";
import ProductVariants from "./components/ProductVariants";

function AddProduct() {
  return (
    <div className="w-9/12 mx-auto">
      <div className="grid grid-cols-12  gap-x-8">
        <div className="col-span-8 flex flex-col gap-8">
          <ProductInfo />
          <ProductInventory />
          <ProductPrice />
          <ProductVariants />
        </div>
        <div className="col-span-4 flex flex-col gap-8">
          <ProductStatus />
          <ProductCollection />
        </div>
      </div>
      <div className="flex items-center justify-end gap-4 mt-8">
        <Button>Hủy</Button>
        <Button type="primary" >Hoàn thành</Button>
      </div>
    </div>
  );
}

export default AddProduct;
