import { Button } from "antd";
import FormPageLayout from "layouts/FormPageLayout";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useToggle } from "react-use";
import CategoryTranslate from "../module/CategoryTranslate";
import CategoryInfo from "./CategoryInfo";
import CategoryParent from "./CategoryParent";
import CategoryPost from "./CategoryPost";

function CategoryProvider(props: any) {
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
      <CategoryTranslate id={id} open={language} toggle={setLanguage} />

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
