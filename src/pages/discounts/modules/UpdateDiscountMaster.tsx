import { Spin } from "antd";
import dayjs from "dayjs";
import moment from "moment";
import { enqueueSnackbar } from "notistack";
import React, { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
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
  const navigate = useNavigate();

  const [productsInit, setProductsInit] = useState([]);

  const { id } = useParams();
  const { mutateAsync: updateDiscount, isPending: loadingUpdate } =
    useUpdateDiscount();
  const { isLoading, data } = useDetailDiscount(Number(id));
  const { mutateAsync: handleAddMulti } = useAddMultiProductDiscount();
  const { mutateAsync: deleteDiscount } = useDeleteDiscount();
  const handleSubmit = methods.handleSubmit(async (data: any) => {
    const { name, start_date, end_date, type, value, products } = data;
    const format = "YYYY/MM/DD hh:mm:ss";
    const res: any = await updateDiscount({
      id: Number(id),
      data: {
        name,
        type,
        value,
        start_date: dayjs(start_date).format(format),
        end_date: dayjs(end_date).format(format),
      },
    });
    if (res.code === 200) {
      enqueueSnackbar({
        message: "Chỉnh sửa khuyến mãi thành công",
        variant: "success",
      });
    } else {
      enqueueSnackbar({
        message: "Chỉnh sửa khuyến mãi thất bại",
        variant: "error",
      });
    }
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
            methods.setValue(
              "products",
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
  });
  const handleDelete = async () => {
    const res = await deleteDiscount(Number(id));
    if (res.code === 200 || res.code === 0) {
      navigate("/discounts");
    }
  };

  useEffect(() => {
    if (data) {
      methods.reset(data.data);
    }
  }, [data]);

  if (isLoading) return <Spin />;

  return (
    <FormProvider {...methods}>
      <DiscountMasterProvider
        onSubmit={handleSubmit}
        loadingSubmit={loadingUpdate}
        handleDelete={handleDelete}
      />
    </FormProvider>
  );
}

export default UpdateDiscountMaster;
