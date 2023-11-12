import { Button } from "antd";
import { FormContext } from "antd/es/form/context";
import { useAuth } from "auth/AuthProvider";
import { useStorePost } from "hooks/posts";
import FormPageLayout from "layouts/FormPageLayout";
import { FormProvider, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import PostCategory from "./PostCategory";
import PostInfo from "./PostInfo";
import PostMedia from "./PostMedia";
import PostStatus from "./PostStatus";
function PostProvider(props: any) {
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
            <PostInfo />
          </>
        }
        contentRight={
          <>
            <PostStatus />
            <PostMedia />
            <PostCategory />
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

export default PostProvider;
