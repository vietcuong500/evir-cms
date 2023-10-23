import { Spin } from "antd";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import CategoryProvider from "../components/CategoryProvider";
import {
  useDeleteCategory,
  useDetailCategory,
  useUpdateCategory,
} from "../hook";

function UpdateCategory() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { isLoading, data } = useDetailCategory(Number(id));
  console.log(data);
  const { isPending: loadingUpdate, mutate } = useUpdateCategory();
  const { isPending: loadingDelete, mutateAsync: mutateDelete } =
    useDeleteCategory();
  const handleSubmit = (data: any) => {
    const { name, parent_id } = data;
    mutate({
      id: Number(id),
      data: {
        name,
        parent_id,
      },
    });
  };
  const handleDelete = async () => {
    const res = await mutateDelete(Number(id));
    if (res.code === 200 || res.code === 0) {
      navigate("/category");
    }
  };
  if (isLoading) return <Spin />;
  return (
    <CategoryProvider
      defaultValues={{
        name: data.data.name,
        parent_id: data.data.parent.id,
        id: Number(id),
      }}
      loadingSubmit={loadingUpdate}
      handleSubmit={handleSubmit}
      handleDelete={handleDelete}
    />
  );
}

export default UpdateCategory;
