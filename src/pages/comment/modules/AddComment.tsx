import React from "react";
import { useNavigate } from "react-router-dom";
import { useCreateComment } from "../hook";
import CommentProvider from "./CommentProvider";

function AddComment() {
  const navigate = useNavigate();
  const { mutateAsync, isPending } = useCreateComment();
  const handleSubmit = async (data: any) => {
    const { content, post_id, user_id, parent_id } = data;
    const res = await mutateAsync({
      content,
      post_id,
      user_id,
      parent_id: null,
    });

    if (res.code === 0 || res.code === 200) {
      navigate("/comment/" + res.data.id);
    }
  };
  return (
    <CommentProvider
      loadingSubmit={false}
      defaultValues={{
        content: "hello",
        post_id: null,
        user_id: null,
        parent_id: null,
      }}
      handleSubmit={handleSubmit}
    />
  );
}

export default AddComment;
