import { Button } from "antd";
import { FormContext } from "antd/es/form/context";
import { useAuth } from "auth/AuthProvider";
import { useStorePost } from "hooks/posts";
import FormPageLayout from "layouts/FormPageLayout";
import { enqueueSnackbar } from "notistack";
import { FormProvider, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import PostCategory from "./components/PostCategory";
import PostInfo from "./components/PostInfo";
import PostProvider from "./components/PostProvider";
import PostStatus from "./components/PostStatus";

function AddPost() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { mutateAsync, isPending } = useStorePost();
  const handleSubmit = async (data: any) => {
    const res = await mutateAsync({
      ...data,
      author_id: user?.id,
    });
    if (res.code === 200 || res.code === 0) {
      enqueueSnackbar({
        message: "Thêm bài viết thành công",
        variant: "success",
      });
      navigate(`/posts/${res.data.id}`);
    } else {
      enqueueSnackbar({
        message: "Thêm bài viết không thành công",
        variant: "error",
      });
    }
  };
  return (
    <PostProvider
      defaultValues={{
        title: "Bài 1",
        content: "",
        avatar: null,
        category_id: null,
        author_id: null,
        status: "DRAFT",
        summary: "",
      }}
      handleSubmit={handleSubmit}
      loadingSubmit={isPending}
    />
  );
}

export default AddPost;
