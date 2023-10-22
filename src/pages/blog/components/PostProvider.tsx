import { FormContext } from "antd/es/form/context";
import { useAuth } from "auth/AuthProvider";
import { useStorePost } from "hooks/posts";
import FormPageLayout from "layouts/FormPageLayout";
import { FormProvider, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import PostCategory from "./PostCategory";
import PostInfo from "./PostInfo";
import PostStatus from "./PostStatus";
function PostProvider(props: any) {
  const { defaultValues, onSubmit, onCancel, loading } = props;
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
            <PostCategory />
          </>
        }
        onCancel={onCancel}
        onSubmit={methods.handleSubmit((data) => {
          onSubmit(data);
        })}
        loading={loading}
      />
    </FormProvider>
  );
}

export default PostProvider;
