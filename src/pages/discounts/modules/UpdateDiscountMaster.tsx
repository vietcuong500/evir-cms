import { Spin } from "antd";
import moment from "moment";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  useAddMultiProductDiscount,
  useDeleteDiscount,
  useDetailDiscount,
  useUpdateDiscount,
} from "../hook";
import DiscountMasterProvider from "./DiscountMasterProvider";

function UpdateDiscountMaster() {
  const navigate = useNavigate();

  const { id } = useParams();
  const { mutate: updateDiscount, isPending: loadingUpdate } =
    useUpdateDiscount();
  const { isLoading, data } = useDetailDiscount(Number(id));
  const { mutateAsync: handleAddMulti } = useAddMultiProductDiscount();
  const { mutateAsync: deleteDiscount } = useDeleteDiscount();
  const handleSubmit = async (data: any) => {
    const {
      name,
      start_date,
      end_date,
      type,
      product_ids,
      products_remove,
      value,
    } = data;
    console.log(product_ids, products_remove);
    updateDiscount({
      id: Number(id),
      data: {
        name,
        type,
        value,
        start_date: moment(start_date).format("YYYY/MM/DD HH:mm:ss"),
        end_date: moment(end_date).format("YYYY/MM/DD HH:mm:ss"),
      },
    });
    // const res = await handleAddMulti({
    //   product_ids,
    //   discount_id: Number(id),
    // });
    // console.log(res);
  };
  const handleDelete = async () => {
    const res = await deleteDiscount(Number(id));
    if (res.code === 200 || res.code === 0) {
      navigate("/discounts");
    }
  };
  if (isLoading) return <Spin />;

  return (
    <DiscountMasterProvider
      handleDelete={handleDelete}
      handleSubmit={handleSubmit}
      loadingSubmit={loadingUpdate}
      defaultValues={{
        ...data.data,
        product_ids: data.data.products.map((el: any) => el.id),
        product_ids_init: data.data.products.map((el: any) => el.id),
        products_remove: [],
      }}
    />
  );
}

export default UpdateDiscountMaster;
