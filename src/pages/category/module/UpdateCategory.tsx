import { Spin } from "antd";
import { enqueueSnackbar } from "notistack";
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
  const { isPending: loadingUpdate, mutateAsync } = useUpdateCategory();
  const { isPending: loadingDelete, mutateAsync: mutateDelete } =
    useDeleteCategory();
  const handleSubmit = async (data: any) => {
    const { name, parent_id } = data;
    const res = await mutateAsync({
      id: Number(id),
      data: {
        name,
        parent_id,
      },
    });
    if (res.code === 0 || res.code === 200) {
      enqueueSnackbar({
        message: "Sửa danh mục thành công",
        variant: "success",
      });
    } else {
      enqueueSnackbar({
        message: "Sửa danh mục không thành công",
        variant: "error",
      });
    }
  };
  const handleDelete = async () => {
    const res = await mutateDelete(Number(id));
    if (res.code === 0 || res.code === 200) {
      enqueueSnackbar({
        message: "Xóa danh mục thành công",
        variant: "success",
      });
      navigate(`/category`);
    } else {
      enqueueSnackbar({
        message: "Xóa danh mục không thành công",
        variant: "error",
      });
    }
  };
  if (isLoading) return <Spin />;
  return (
    <CategoryProvider
      defaultValues={{
        name: data.data.name,
        parent_id: data.data.parent?.id || null,
        id: Number(id),
      }}
      id={Number(id)}
      loadingSubmit={loadingUpdate}
      handleSubmit={handleSubmit}
      handleDelete={handleDelete}
    />
  );
}

export default UpdateCategory;
