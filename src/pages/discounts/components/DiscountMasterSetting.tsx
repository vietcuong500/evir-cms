import { Button, Input, InputNumber, Radio, Table } from "antd";
import ProductResource from "components/ProductResource/ProductResource";
import React from "react";
import { Controller, useFormContext, useWatch } from "react-hook-form";
import { useParams } from "react-router-dom";
import { useToggle } from "react-use";
import { useRemoveProductToDiscount } from "../hook";

function DiscountMasterSetting() {
  const { id } = useParams();
  const { control, setValue } = useFormContext();
  const [open, setOpen] = useToggle(false);

  const products = useWatch({
    control,
    name: "products",
  });

  const product_ids_init = useWatch({
    control,
    name: "product_ids_init",
  });

  const products_remove = useWatch({
    control,
    name: "products_remove",
  });

  const product_ids = useWatch({
    control,
    name: "product_ids",
  });

  const { isPending, mutateAsync } = useRemoveProductToDiscount();

  return (
    <div className="box">
      <p className="box-title">Thiết lập</p>
      <div className="px-5 py-3 flex flex-col gap-4">
        <div className="flex gap-4">
          <Controller
            control={control}
            name="type"
            render={({ field: { onChange, value } }) => (
              <Radio.Group
                value={value}
                onChange={onChange}
                className="!flex !w-[23rem]"
              >
                <Radio.Button value="FIXED">Fixed amount</Radio.Button>
                <Radio.Button value="PERCENTAGE">Percentage</Radio.Button>
              </Radio.Group>
            )}
          />

          <Controller
            control={control}
            name="value"
            render={({ field: { onChange, value } }) => (
              <InputNumber
                value={value}
                onChange={onChange}
                className="!grow"
                placeholder="Số lượng giảm"
              />
            )}
          />
        </div>
        <div>
          <ProductResource
            defaultValues={product_ids}
            onChange={(value: any) => {
              setValue("product_ids", [...product_ids, ...value.product_ids]);
              setValue("products", [...products, ...value.products]);
            }}
            open={open}
            toggle={setOpen}
          />
          <p className="font-semibold text-neutral-700 mb-2">Áp dụng</p>
          <Radio.Group className="!flex !flex-col">
            <Radio value="collection">Bộ sưu tập</Radio>
            <Radio value="product">Sản phẩm</Radio>
          </Radio.Group>

          <div className="mt-2 flex gap-4">
            <Input placeholder="Nhập từ khóa tìm kiếm" />
            <Button onClick={setOpen}>Browers</Button>
          </div>
        </div>
      </div>
      <Table
        pagination={false}
        dataSource={products.map((el: any) => ({ ...el, key: el.id }))}
        columns={[
          {
            dataIndex: "images",
            title: "",
            key: "images",
            width: 30,
            render: (value) => (
              <div className="w-8 h-10 bg-neutral-600 rounded">
                <img
                  className="w-full h-full object-cover"
                  src={value}
                  alt=""
                />
              </div>
            ),
          },
          {
            dataIndex: "name",
            key: "name",
            title: "Tên sản phẩm",
          },
          {
            dataIndex: "status",
            key: "status",
            title: "Trạng thái",
          },
          {
            dataIndex: "price",
            key: "price",
            title: "Giá bán",
          },
          {
            dataIndex: "",
            key: "actions",
            title: "",
            render: (value, record) => (
              <Button
                onClick={async () => {
                  setValue("products_remove", [...products_remove, record.id]);
                  // const isRemove = product_ids_init.find(
                  //   (el: number) => el == record.value
                  // );
                  // if(isRemove) {
                  //   setValue("products_remove", )
                  // }
                }}
                type="link"
              >
                Xóa
              </Button>
            ),
          },
        ]}
      />
    </div>
  );
}

export default DiscountMasterSetting;
