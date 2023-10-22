import { Spin } from "antd";
import { useDetailPost } from "hooks/posts";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import PostProvider from "./components/PostProvider";

function UpdatePost() {
  const navigate = useNavigate();

  const { id } = useParams();
  const { isLoading, data } = useDetailPost(Number(id));
  if (isLoading) return <Spin />;
  return (
    <PostProvider
      defaultValues={{ ...data.data, category_id: data.data.category.id }}
      loading={false}
      onCancel={() => navigate("/posts")}
      onSubmit={(values: any) => console.log(values)}
    />
  );
}

export default UpdatePost;
