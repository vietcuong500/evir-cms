import { Button } from "antd";
import FormPageLayout from "layouts/FormPageLayout";
import React, { useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { DiscountInfo, DiscountMasterSetting } from "../components";

function DiscountMasterProvider(props: any) {
  const navigate = useNavigate();
  const { defaultValues, handleSubmit, handleDelete, loadingSubmit } = props;
  const methods = useForm({
    mode: "all",
    defaultValues,
  });

  useEffect(() => {
    methods.reset(defaultValues);
  }, [defaultValues]);
  return (
    <FormProvider {...methods}>
      <FormPageLayout
        contentLeft={
          <>
            <DiscountInfo />
            <DiscountMasterSetting />
          </>
        }
        contentRight={<></>}
        footer={
          <>
            <Button onClick={() => navigate("/admin/discounts")}>Hủy</Button>
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

export default DiscountMasterProvider;
