import { Button } from "antd";
import FormPageLayout from "layouts/FormPageLayout";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import CategoryInfo from "./CategoryInfo";
import CategoryParent from "./CategoryParent";
import CategoryPost from "./CategoryPost";

function CategoryProvider(props: any) {
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
            <CategoryInfo />
            {/* <CategoryPost /> */}
          </>
        }
        contentRight={
          <>
            <CategoryParent />
          </>
        }
        footer={
          <>
            <Button onClick={() => navigate("/category")}>Hủy</Button>
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

export default CategoryProvider;
