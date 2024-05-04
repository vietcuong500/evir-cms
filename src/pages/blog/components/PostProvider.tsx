import { Button } from "antd";
import { FormContext } from "antd/es/form/context";
import { useAuth } from "auth/AuthProvider";
import { useStorePost } from "hooks/posts";
import FormPageLayout from "layouts/FormPageLayout";
import { FormProvider, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useToggle } from "react-use";
import PostTranslate from "../PostTranslate";
import PostCategory from "./PostCategory";
import PostInfo from "./PostInfo";
import PostMedia from "./PostMedia";
import PostStatus from "./PostStatus";
function PostProvider(props: any) {
  const navigate = useNavigate();
  const { defaultValues, handleSubmit, handleDelete, loadingSubmit, id } =
    props;
  const methods = useForm({
    defaultValues,
    mode: "all",
  });
  const [language, setLanguage] = useToggle(false);

  return (
    <FormProvider {...methods}>
      <PostTranslate id={id} open={language} toggle={setLanguage} />

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
