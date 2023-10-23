import { useCreateCollection } from "hooks/collection";
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
      navigate(`/collections/${res.data.id}`);
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
