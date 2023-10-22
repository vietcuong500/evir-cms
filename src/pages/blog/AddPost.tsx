import { FormContext } from "antd/es/form/context";
import { useAuth } from "auth/AuthProvider";
import { useStorePost } from "hooks/posts";
import FormPageLayout from "layouts/FormPageLayout";
import { FormProvider, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import PostCategory from "./components/PostCategory";
import PostInfo from "./components/PostInfo";
import PostProvider from "./components/PostProvider";
import PostStatus from "./components/PostStatus";

function AddPost() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { mutate, isPending } = useStorePost();
  const handleSubmit = (data: any) => {
    mutate({
      ...data,
      author_id: user?.id,
    });
  };
  return (
    <PostProvider
      onSubmit={handleSubmit}
      onCancel={() => navigate("/posts")}
      loading={isPending}
      defaultValues={{
        title: "Bài 1",
        content: "content ngắn thôi",
        avatar: null,
        category_id: null,
        author_id: null,
        status: "DRAFT",
      }}
    />
  );
}

export default AddPost;
