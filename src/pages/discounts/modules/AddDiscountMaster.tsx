import dayjs from "dayjs";
import moment from "moment";
import { enqueueSnackbar } from "notistack";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAddMultiProductDiscount, useCreateDiscount } from "../hook";
import DiscountMasterProvider from "./DiscountMasterProvider";

function AddDiscountMaster() {
  const methods = useForm({
    mode: "all",
    defaultValues: {
      name: "Khuyen mai",
      type: "FIXED",
      start_date: "2023/10/22 00:00:00",
      end_date: "2023/11/22 00:00:00",
      value: 10,
      products: [],
    },
  });
  const { isPending, mutateAsync } = useCreateDiscount();
  const { mutateAsync: handleAddMulti } = useAddMultiProductDiscount();

  const navigate = useNavigate();
  const handleSubmit = methods.handleSubmit(async (data: any) => {
    const { name, type, start_date, end_date, value, products } = data;
    const format = "YYYY/MM/DD hh:mm:ss";

    const res = await mutateAsync({
      name,
      type,
      value,
      start_date: dayjs(start_date).format(format),
        end_date: dayjs(end_date).format(format),
    });
    if (res.code === 200 || res.code === 0) {
      enqueueSnackbar({
        message: "Tạo khuyến mãi thành công",
        variant: "success",
      });
      await handleAddMulti({
        discount_id: res.data.id,
        product_ids: products.map((el: any) => el.id),
      });
      navigate(`/discounts/${res.data.id}`);
    } else {
      enqueueSnackbar({
        message: "Tạo khuyến mãi không thành công",
        variant: "error",
      });
    }
  });
  return (
    <FormProvider {...methods}>
      <DiscountMasterProvider
        onSubmit={handleSubmit}
        loadingSubmit={isPending}
      />
    </FormProvider>
  );
}

export default AddDiscountMaster;
