import { Button } from "antd";
import FormPageLayout from "layouts/FormPageLayout";
import React, { useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { DiscountInfo, DiscountMasterSetting } from "../components";

function DiscountMasterProvider(props: any) {
  const { handleDelete, loadingSubmit, onSubmit } = props;
  const navigate = useNavigate();
  return (
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
          <Button onClick={() => navigate("/discounts")}>Hủy</Button>
          {handleDelete ? (
            <Button danger type="primary" onClick={handleDelete}>
              Xóa
            </Button>
          ) : null}

          <Button loading={loadingSubmit} onClick={onSubmit} type="primary">
            Hoàn thành
          </Button>
        </>
      }
    />
  );
}

export default DiscountMasterProvider;
