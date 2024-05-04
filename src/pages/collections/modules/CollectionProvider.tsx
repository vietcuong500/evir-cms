import { Button } from "antd";
import FormPageLayout from "layouts/FormPageLayout";
import ProductStatus from "pages/products/components/ProductStatus";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useToggle } from "react-use";
import CollectionInfo from "../components/CollectionInfo";
import CollectionProduct from "../components/CollectionProduct";
import CollectionTranslate from "./CollectionTranslate";

function CollectionProvider(props: any) {
  const navigate = useNavigate();
  const { defaultValues, handleSubmit, handleDelete, loadingSubmit, id } =
    props;
  const methods = useForm({
    mode: "all",
    defaultValues,
  });
  const [language, setLanguage] = useToggle(false);

  return (
    <FormProvider {...methods}>
      <CollectionTranslate id={id} open={language} toggle={setLanguage} />
      <FormPageLayout
        header={
          id ? (
            <div className="mb-4 flex justify-end">
              <Button onClick={setLanguage}>Chuyển đổi ngôn ngữ</Button>
            </div>
          ) : null
        }
        contentLeft={
          <>
            <CollectionInfo />
            {/* <CollectionProduct /> */}
          </>
        }
        contentRight={
          <>
            {/* <ProductStatus />
            <ProductCollection /> */}
          </>
        }
        footer={
          <>
            <Button onClick={() => navigate("/posts")}>Hủy</Button>
            {handleDelete ? (
              <Button
                danger
                disabled={defaultValues.num_of_products > 0 ? true : false}
                type="primary"
                onClick={handleDelete}
              >
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
