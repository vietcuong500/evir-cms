import { Button } from "antd";
import FormPageLayout from "layouts/FormPageLayout";
import ProductStatus from "pages/products/components/ProductStatus";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import CollectionInfo from "../components/CollectionInfo";
import CollectionProduct from "../components/CollectionProduct";

function CollectionProvider(props: any) {
  const navigate = useNavigate();
  const { defaultValues, handleSubmit, handleDelete, loadingSubmit } = props;
  const methods = useForm({
    mode: "all",
    defaultValues,
  });
  return (
    <FormProvider {...methods}>
      <FormPageLayout
        contentLeft={
          <>
            <CollectionInfo />
            {/* <CollectionProduct /> */}
          </>
        }
        contentRight={
          <>
            <ProductStatus />
            {/* <ProductCollection /> */}
          </>
        }
        footer={
          <>
            <Button onClick={() => navigate("/admin/posts")}>Hủy</Button>
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

export default CollectionProvider;
