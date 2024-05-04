import { useCreateCollection } from "hooks/collection";
import { enqueueSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";
import CollectionProvider from "./modules/CollectionProvider";

function AddCollection() {
  const { mutateAsync, isPending } = useCreateCollection();
  const navigate = useNavigate();
  const handleSubmit = async (data: any) => {
    const res = await mutateAsync({
      ...data,
      slug: data.name.replaceAll(" ", "-"),
    });
    if (res.code === 0 || res.code === 200) {
      enqueueSnackbar({
        message: "Thêm danh mục thành công",
        variant: "success",
      });
      navigate(`/collections/${res.data.id}`);
    } else {
      enqueueSnackbar({
        message: "Thêm danh mục không thành công",
        variant: "error",
      });
    }
  };

  return (
    <CollectionProvider
      handleSubmit={handleSubmit}
      loadingSubmit={isPending}
      defaultValues={{
        name: "",
        slug: "",
        parent_id: null,
      }}
    />
  );
}

export default AddCollection;
