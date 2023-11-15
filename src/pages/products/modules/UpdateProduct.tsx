import { Spin } from "antd";
import {
  useDeleteProduct,
  useDetailProduct,
  useUpdateProduct,
} from "hooks/product";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import ProductProvider from "./ProductProvider";

function UpdateProduct() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { mutateAsync: onDelete } = useDeleteProduct();
  const { isPending, mutateAsync } = useUpdateProduct();
  const { isLoading, isSuccess, isError, data } = useDetailProduct(Number(id));
  const handleSubmit = (data: any) => {
    const {
      images,
      name,
      slug,
      description,
      about_the_product,
      how_to_use,
      price,
      stock,
      category_id,
      lst_image,
      
    } = data;
    mutateAsync({
      images,
      name,
      slug,
      description,
      about_the_product,
      how_to_use,
      price,
      stock,
      category_id,
      id,
      lst_image
    });
  };
  const handleDelete = async () => {
    const res = await onDelete(Number(id));
    if (res.code === 200 || res.code === 0) {
      navigate("/products");
    }
  };
  if (isLoading) return <Spin />;
  if (isError) return <div>error</div>;
  if (data)
    return (
      <ProductProvider
        productId={Number(id)}
        handleSubmit={handleSubmit}
        loadingSubmit={isPending}
        defaultValues={{
          ...data.data,
          category_id: data.data.category?.id,
          lst_image: data.data.lst_image || [],
        }}
        handleDelete={handleDelete}
      />
    );
  return null;
}

export default UpdateProduct;
