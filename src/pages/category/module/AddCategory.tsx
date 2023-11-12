import React from "react";
import { useNavigate } from "react-router-dom";
import CategoryProvider from "../components/CategoryProvider";
import { useCreateCategory } from "../hook";

function AddCategory() {
  const navigate = useNavigate();
  const { mutateAsync, isPending } = useCreateCategory();
  const handleSubmit = async (data: any) => {
    const res = await mutateAsync({
      ...data,
    });
    if (res.code === 200 || res.code === 0) {
      navigate(`/admin/category/${res.data.id}`);
    }
  };
  return (
    <CategoryProvider
      defaultValues={{
        name: "",
        parent_id: null,
      }}
      handleSubmit={handleSubmit}
      loadingSubmit={isPending}
    />
  );
}

export default AddCategory;
