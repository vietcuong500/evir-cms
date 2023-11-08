import { useCreateProduct } from "hooks/product";
import { useNavigate } from "react-router-dom";
import ProductProvider from "./modules/ProductProvider";
export interface ProductCreateModel {
  images: string | null;
  name: string;
  slug: string;
  description: string;
  about_the_product: string;
  how_to_use: string;
  price: number | null;
  stock: number | null;
  category_id: number | null;
  lst_image: string[];
}

function AddProduct() {
  const { mutateAsync, isPending } = useCreateProduct();
  const navigate = useNavigate();
  const handleSubmit = async (data: any) => {
    const res = await mutateAsync({
      ...data,
      slug: data.name.replaceAll(" ", "-"),
    });
    if (res.code === 0 || res.code === 200) {
      navigate(`/products/${res.data.id}`);
    }
  };

  return (
    <ProductProvider
      handleSubmit={handleSubmit}
      loadingSubmit={isPending}
      defaultValues={{
        images:
          "https://www.mountaingoatsoftware.com/uploads/blog/2016-09-06-what-is-a-product.png",
        name: "n111111",
        slug: "",
        description: "des",
        about_the_product: "nononon",
        how_to_use: "jojoasdf",
        price: 18000,
        stock: 89,
        category_id: null,
        lst_image: [],
      }}
    />
  );
}

export default AddProduct;
