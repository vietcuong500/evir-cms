import { Button, Select } from "antd";
import FormPageLayout from "layouts/FormPageLayout";
import React, { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { useToggle } from "react-use";
import { ProductCreateModel } from "../AddProduct";
import ProductCollection from "../components/ProductCollection";
import ProductInfo from "../components/ProductInfo";
import ProductInventory from "../components/ProductInventory";
import ProductMedia from "../components/ProductMedia";
import ProductPrice from "../components/ProductPrice";
import ProductStatus from "../components/ProductStatus";
import ProductThumbnail from "../components/ProductThumbnail";
import ProductTranslate from "./ProductTranslate";

interface IProductProviderProps {
  defaultValues: ProductCreateModel;
  handleSubmit: any;
  handleDelete?: any;
  loadingSubmit: boolean;
  productId?: number;
}

function ProductProvider(props: IProductProviderProps) {
  const navigate = useNavigate();
  const {
    defaultValues,
    handleSubmit,
    handleDelete,
    loadingSubmit,
    productId,
  } = props;
  const methods = useForm({
    defaultValues,
    mode: "all",
  });
  const [language, setLanguage] = useToggle(false);
  return (
    <FormProvider {...methods}>
      <ProductTranslate
        product_id={productId}
        open={language}
        toggle={setLanguage}
      />
      <FormPageLayout
        header={
          productId ? (
            <div className="mb-4 flex justify-end">
              <Button onClick={setLanguage}>Chuyển đổi ngôn ngữ</Button>
              {/* <Select
          onChange={(value) => setLanguage(value)}
          value={language}
          options={[
            { label: "Tiếng Việt", value: "VI" },
            { label: "English", value: "EN" },
          ]}
        /> */}
            </div>
          ) : null
        }
        contentLeft={
          <>
            <ProductInfo />
            <ProductInventory />
            <ProductPrice />
          </>
        }
        contentRight={
          <>
            <ProductThumbnail />
            <ProductMedia />
            <ProductStatus />
            <ProductCollection />
          </>
        }
        footer={
          <>
            <Button onClick={() => navigate("/products")}>Hủy</Button>
            {handleDelete ? (
              <Button danger type="primary" onClick={handleDelete}>
                Xóa
              </Button>
            ) : null}

            <Button
              loading={loadingSubmit}
              onClick={methods.handleSubmit((data) => handleSubmit(data))}
              type="primary"
            >
              Hoàn thành
            </Button>
          </>
        }
      />
    </FormProvider>
  );
}

export default ProductProvider;
