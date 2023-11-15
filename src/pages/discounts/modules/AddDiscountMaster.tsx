import moment from "moment";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useAddMultiProductDiscount, useCreateDiscount } from "../hook";
import DiscountMasterProvider from "./DiscountMasterProvider";

function AddDiscountMaster() {
  const { isPending, mutateAsync } = useCreateDiscount();
  const { mutateAsync: handleAddMulti } = useAddMultiProductDiscount();

  const navigate = useNavigate();
  const handleSubmit = async (data: any) => {
    const { name, type, start_date, end_date, value, products } = data;
    const res = await mutateAsync({
      name,
      type,
      value,
      start_date: moment(start_date).format("YYYY/MM/DD HH:mm:ss"),
      end_date: moment(end_date).format("YYYY/MM/DD HH:mm:ss"),
    });
    if (res.code === 200 || res.code === 0) {
      await handleAddMulti({
        discount_id: res.data.id,
        product_ids: products.map((el: any) => el.id),
      });
      navigate(`/discounts/${res.data.id}`);
    }
  };
  return (
    <DiscountMasterProvider
      handleSubmit={handleSubmit}
      loadingSubmit={isPending}
      defaultValues={{
        name: "Khuyen mai",
        type: "FIXED",
        start_date: "2023/10/22 00:00:00",
        end_date: "2023/11/22 00:00:00",
        value: 10,
        products: [],
      }}
    />
  );
}

export default AddDiscountMaster;
