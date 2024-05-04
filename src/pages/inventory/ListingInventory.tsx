import { Button, Table, Tag, Typography } from "antd";
import React from "react";
import { useToggle } from "react-use";
import EditVariant from "./components/EditVariant/EditVariant";

function ListingInventory() {
  const [open, setOpen] = useToggle(false);
  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <p className="text-lg font-semibold text-neutral-700">Hàng tồn khoa</p>
        <div className="flex items-center gap-2">
          <Button type="text" className="!bg-neutral-200">
            Export
          </Button>
        </div>
      </div>

      <div className="box">
        <div></div>
        <Table
          size="small"
          rowSelection={{
            onChange: (keys, row) => console.log(keys),
          }}
          dataSource={[
            {
              key: "1",
              name: "Iphone 12",
              availble: 32,
              on_hand: 21,
              sku: "No SKU",
              price: "12.000.000",
              variant: "Black / 128",
            },
            {
              key: "2",
              name: "IPhone X",
              availble: 42,
              on_hand: 10,
              sku: "No SKU",
              price: "8.400.000",
              variant: "White / 64",
            },
          ]}
          columns={[
            {
              title: "",
              dataIndex: "image",
              key: "image",
            },
            {
              title: "Tên sản phẩm",
              dataIndex: "name",
              key: "name",
              render(value, record, index) {
                return (
                  <div key={index}>
                    <p className="font-semibold text-sm text-neutral-800 mb-1">
                      {value}
                    </p>
                    <Tag bordered={false}>{record.variant}</Tag>
                  </div>
                );
              },
            },
            {
              title: "SKU",
              dataIndex: "sku",
              key: "sku",
            },
            {
              title: "Giá bán",
              key: "price",
              dataIndex: "price",
            },
            {
              title: "Tồn kho",
              key: "availble",
              dataIndex: "availble",
            },
            {
              title: "Hiện có",
              key: "on_hand",
              dataIndex: "on_hand",
            },
            {
              title: "Action",
              dataIndex: "",
              key: "x",
              render: () => (
                <Button onClick={setOpen} type="link" size="small">
                  Sửa
                </Button>
              ),
            },
          ]}
          pagination={false}
        />
      </div>
      <EditVariant toggle={setOpen} open={open} />
    </div>
  );
}

export default ListingInventory;
