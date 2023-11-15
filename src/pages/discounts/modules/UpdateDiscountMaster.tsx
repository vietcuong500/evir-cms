import { Spin } from "antd";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  useAddMultiProductDiscount,
  useDeleteDiscount,
  useDetailDiscount,
  useListingProductDiscount,
  useUpdateDiscount,
} from "../hook";
import DiscountMasterProvider from "./DiscountMasterProvider";

function UpdateDiscountMaster() {
  const navigate = useNavigate();

  const [productsInit, setProductsInit] = useState([]);

  const { id } = useParams();
  const { mutate: updateDiscount, isPending: loadingUpdate } =
    useUpdateDiscount();
  const { isLoading, data } = useDetailDiscount(Number(id));
  const { mutateAsync: handleAddMulti } = useAddMultiProductDiscount();
  const { mutateAsync: deleteDiscount } = useDeleteDiscount();
  const handleSubmit = async (data: any) => {
    const { name, start_date, end_date, type, value, products } = data;
    // updateDiscount({
    //   id: Number(id),
    //   data: {
    //     name,
    //     type,
    //     value,
    //     start_date: moment(start_date).format("YYYY/MM/DD HH:mm:ss"),
    //     end_date: moment(end_date).format("YYYY/MM/DD HH:mm:ss"),
    //   },
    // });
    const product_add = products
      .filter((el: any) => el.isNew)
      .map((el: any) => el.id);
    if (product_add.length > 0) {
      const res: any = await handleAddMulti({
        product_ids: products
          .filter((el: any) => el.isNew)
          .map((el: any) => el.id),
        discount_id: Number(id),
      });
      if (res) {
        res.map((el: any) => {
          if (el.code === 200) {
            setProductsInit(
              products.map((product: any) =>
                product.id === el.data.product_id
                  ? { ...product, isNew: false }
                  : product
              )
            );
          }
        });
      }
    }

    // console.log(res);
  };
  const handleDelete = async () => {
    const res = await deleteDiscount(Number(id));
    if (res.code === 200 || res.code === 0) {
      navigate("/discounts");
    }
  };

  useEffect(() => {
    if (data) {
      setProductsInit(
        data.data.products.map((el: any) => ({
          ...el,
          key: el.id,
          isNew: false,
        }))
      );
    }
  }, [data]);

  if (isLoading) return <Spin />;

  return (
    <DiscountMasterProvider
      handleDelete={handleDelete}
      handleSubmit={handleSubmit}
      loadingSubmit={loadingUpdate}
      defaultValues={{
        ...data.data,
        product_ids: productsInit.map((el: any) => el.id),
        product_ids_init: productsInit.map((el: any) => el.id),
        products: productsInit,
      }}
    />
  );
}

export default UpdateDiscountMaster;
