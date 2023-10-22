import { Button, Spin } from "antd";
import { useDeletePost, useDetailPost, useUpdatePost } from "hooks/posts";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import PostProvider from "./components/PostProvider";

function UpdatePost() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { isLoading, data } = useDetailPost(Number(id));
  const { isPending: loadingUpdate, mutate } = useUpdatePost();
  const { isPending: loadingDelete, mutateAsync: mutateDelete } =
    useDeletePost();
  const handleSubmit = (data: any) => {
    const { title, content, avatar, category_id, author_id, status } = data;
    mutate({
      id: Number(id),
      data: {
        title,
        content,
        avatar,
        category_id,
        author_id,
        status,
      },
    });
  };
  const handleDelete = async () => {
    const res = await mutateDelete(Number(id));
    if (res.code === 200 || res.code === 0) {
      navigate("/posts");
    }
  };
  if (isLoading) return <Spin />;
  return (
    <PostProvider
      defaultValues={{ ...data.data, category_id: data.data.category.id }}
      loadingSubmit={loadingUpdate}
      handleSubmit={handleSubmit}
      handleDelete={handleDelete}
    />
  );
}

export default UpdatePost;
