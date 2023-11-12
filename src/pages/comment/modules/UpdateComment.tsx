import { Spin } from "antd";
import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useDeleteComment, useDetailComment, useUpdateComment } from "../hook";
import CommentProvider from "./CommentProvider";

function UpdateComment() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { state } = useLocation();
  const { isPending: loadingUpdate, mutate } = useUpdateComment();
  const { isPending: loadingDelete, mutateAsync: mutateDelete } =
    useDeleteComment();
  const { isLoading, data } = useDetailComment(Number(id));
  const handleSubmit = (data: any) => {
    const { content, post_id, user_id, parent_id } = data;
    mutate({
      id: Number(id),
      data: {
        content,
        post_id,
        user_id,
        parent_id: null,
      },
    });
  };
  const handleDelete = async () => {
    const res = await mutateDelete(Number(id));
    if (res.code === 200 || res.code === 0) {
      navigate("/admin/comment");
    }
  };
  if (isLoading) return <Spin />;
  if (data)
    return (
      <CommentProvider
        defaultValues={{
          content: data.data.content,
          post_id: data.data.post?.id,
          user_id: data.data.user?.id,
          parent_id: data.data.parent?.id,
        }}
        loadingSubmit={loadingUpdate}
        handleSubmit={handleSubmit}
        handleDelete={handleDelete}
      />
    );
  return <p>error</p>;
}

export default UpdateComment;
