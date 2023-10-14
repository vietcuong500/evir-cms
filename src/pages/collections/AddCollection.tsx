import { Button } from "antd";
import ProductCollection from "pages/products/components/ProductCollection";
import ProductStatus from "pages/products/components/ProductStatus";
import React from "react";
import CollectionInfo from "./components/CollectionInfo";
import CollectionProduct from "./components/CollectionProduct";

function AddCollection() {
  return (
    <div className="w-9/12 mx-auto">
      <div className="grid grid-cols-12  gap-x-8">
        <div className="col-span-8 flex flex-col gap-8">
          <CollectionInfo />
          <CollectionProduct />
        </div>
        <div className="col-span-4 flex flex-col gap-8">
          <ProductStatus />
          <ProductCollection />
        </div>
      </div>
      <div className="flex items-center justify-end gap-4 mt-8">
        <Button>Hủy</Button>
        <Button type="primary">Hoàn thành</Button>
      </div>
    </div>
  );
}

export default AddCollection;
