import { useDeleteCollection, useUpdateCollection } from "hooks/collection";
import { enqueueSnackbar } from "notistack";
import React from "react";
import {
  redirect,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import CollectionProvider from "./CollectionProvider";

function UpdateCollection() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { state } = useLocation();
  const { mutateAsync: onDelete } = useDeleteCollection();
  const { isPending, mutateAsync } = useUpdateCollection();
  const handleSubmit = async (data: any) => {
    const res = await mutateAsync(data);
    if (res.code === 0 || res.code === 200) {
      enqueueSnackbar({
        message: "Sửa danh mục thành công",
        variant: "success",
      });
      navigate(`/collections/${res.data.id}`);
    } else {
      enqueueSnackbar({
        message: "Sửa danh mục không thành công",
        variant: "error",
      });
    }
  };
  const handleDelete = async () => {
    const res = await onDelete(Number(id));
    if (res.code === 200 || res.code === 0) {
      enqueueSnackbar({
        message: "Xóa danh mục thành công",
        variant: "success",
      });
      navigate("/collections");
    } else {
      enqueueSnackbar({
        message: "Xóa danh mục không thành công",
        variant: "error",
      });
    }
  };
  if (!state) {
    return null;
  }

  return (
    <CollectionProvider
      id={id}
      handleSubmit={handleSubmit}
      loadingSubmit={isPending}
      defaultValues={state?.item}
      handleDelete={handleDelete}
    />
  );
}

export default UpdateCollection;
