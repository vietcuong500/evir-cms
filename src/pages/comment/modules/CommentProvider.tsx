import { Button } from "antd";
import FormPageLayout from "layouts/FormPageLayout";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import CommentInfo from "../components/CommentInfo";

interface ICommentProps {
  defaultValues: any;
  handleSubmit: any;
  handleDelete?: any;
  loadingSubmit: boolean;
}

function CommentProvider(props: ICommentProps) {
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
            <CommentInfo />
          </>
        }
        contentRight={<></>}
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
      ></FormPageLayout>
    </FormProvider>
  );
}

export default CommentProvider;
