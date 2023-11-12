import { useDeleteCollection, useUpdateCollection } from "hooks/collection";
import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import CollectionProvider from "./CollectionProvider";

function UpdateCollection() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { state } = useLocation();
  const { mutateAsync: onDelete } = useDeleteCollection();
  const { isPending, mutateAsync } = useUpdateCollection();
  const handleSubmit = (data: any) => {
    mutateAsync(data);
  };
  const handleDelete = async () => {
    const res = await onDelete(Number(id));
    if (res.code === 200 || res.code === 0) {
      ("/collections");
    }
  };
  return (
    <CollectionProvider
      handleSubmit={handleSubmit}
      loadingSubmit={isPending}
      defaultValues={state?.item}
      handleDelete={handleDelete}
    />
  );
}

export default UpdateCollection;
