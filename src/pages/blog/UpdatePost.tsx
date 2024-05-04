import { Button, Spin } from "antd";
import { useDeletePost, useDetailPost, useUpdatePost } from "hooks/posts";
import { enqueueSnackbar } from "notistack";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import PostProvider from "./components/PostProvider";

function UpdatePost() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { isLoading, data } = useDetailPost(Number(id));
  const { isPending: loadingUpdate, mutateAsync } = useUpdatePost();
  const { isPending: loadingDelete, mutateAsync: mutateDelete } =
    useDeletePost();
  const handleSubmit = async (data: any) => {
    const { title, content, avatar, category_id, author_id, status, summary } =
      data;
    const res = await mutateAsync({
      id: Number(id),
      data: {
        title,
        content,
        avatar,
        category_id,
        author_id,
        status,
        summary,
      },
    });
    if (res.code === 0 || res.code === 200) {
      enqueueSnackbar({
        message: "Sửa bài viết thành công",
        variant: "success",
      });
    } else {
      enqueueSnackbar({
        message: "Sửa bài viết không thành công",
        variant: "error",
      });
    }
  };
  const handleDelete = async () => {
    const res = await mutateDelete(Number(id));
    if (res.code === 200 || res.code === 0) {
      enqueueSnackbar({
        message: "Xóa bài viết thành công",
        variant: "success",
      });
      navigate("/posts");
    } else {
      enqueueSnackbar({
        message: "Xóa bài viết không thành công",
        variant: "error",
      });
    }
  };
  if (isLoading) return <Spin />;
  return (
    <PostProvider
      id={Number(id)}
      defaultValues={{ ...data.data, category_id: data.data.category.id }}
      loadingSubmit={loadingUpdate}
      handleSubmit={handleSubmit}
      handleDelete={handleDelete}
    />
  );
}

export default UpdatePost;
