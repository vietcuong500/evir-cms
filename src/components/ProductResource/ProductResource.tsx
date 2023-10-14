import { Button, Input, Modal, Table } from "antd";
import React from "react";

function ProductResource(props: any) {
  const { open, toggle } = props;
  return (
    <Modal open={open} onCancel={toggle} onOk={toggle} footer={false}>
      <div className="bg-neutral-100 rounded">
        <p className="box-title">Thêm sản phẩm</p>
      </div>
      <div>
        <div className="px-5 py-3 flex items-center justify-between gap-4">
          <Input placeholder="Nhập từ khóa tìm kiếm" />
          <Button type="primary">Tìm kiếm</Button>
        </div>
        <Table
          style={{
            width: "50vw",
          }}
          size="small"
          rowSelection={{
            onChange: () => console.log("run"),
          }}
          dataSource={[
            {
              key: "1",
              availble: 32,
              on_hand: 21,
              sku: "No SKU",
              price: "12.000.000",
              name: "Iphone X",
            },
            {
              key: "2",
              availble: 42,
              on_hand: 10,
              sku: "No SKU",
              price: "8.400.000",
              name: "Iphone 12",
            },
            {
              key: "3",
              availble: 32,
              on_hand: 21,
              sku: "No SKU",
              price: "12.000.000",
              name: "Iphone 6s",
            },
            {
              key: "4",
              availble: 42,
              on_hand: 10,
              sku: "No SKU",
              price: "8.400.000",
              name: "IPhone 15",
            },
          ]}
          columns={[
            {
              title: "",
              dataIndex: "image",
              key: "image",
              width: 90,
              render(value, record, index) {
                return (
                  <div className="flex-center cursor-pointer w-10 h-12 bg-neutral-200"></div>
                );
              },
            },
            {
              title: "Tên sản phẩm",
              dataIndex: "name",
              key: "name",
            },
            {
              title: "Giá bán",
              key: "price",
              dataIndex: "price",
            },
          ]}
          pagination={false}
        />
      </div>
      <div className="flex items-center justify-end gap-4 px-5 py-3">
        <Button>Hủy</Button>
        <Button type="primary">Thêm sản phẩm</Button>
      </div>
    </Modal>
  );
}

export default ProductResource;
