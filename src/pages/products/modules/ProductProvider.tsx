import { Button } from "antd";
import FormPageLayout from "layouts/FormPageLayout";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { ProductCreateModel } from "../AddProduct";
import ProductCollection from "../components/ProductCollection";
import ProductInfo from "../components/ProductInfo";
import ProductInventory from "../components/ProductInventory";
import ProductMedia from "../components/ProductMedia";
import ProductPrice from "../components/ProductPrice";
import ProductStatus from "../components/ProductStatus";

interface IProductProviderProps {
  defaultValues: ProductCreateModel;
  handleSubmit: any;
  handleDelete?: any;
  loadingSubmit: boolean;
}

function ProductProvider(props: IProductProviderProps) {
  const navigate = useNavigate();
  const { defaultValues, handleSubmit, handleDelete, loadingSubmit } = props;
  const methods = useForm({
    defaultValues,
    mode: "all",
  });
  return (
    <FormProvider {...methods}>
      <FormPageLayout
        contentLeft={
          <>
            <ProductInfo />
            <ProductInventory />
            <ProductPrice />
          </>
        }
        contentRight={
          <>
            <ProductMedia />
            <ProductStatus />
            <ProductCollection />
          </>
        }
        footer={
          <>
            <Button onClick={() => navigate("/posts")}>Hủy</Button>
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
