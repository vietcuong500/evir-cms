import { Button, Input, Table } from "antd";
import ProductResource from "components/ProductResource/ProductResource";
import React from "react";
import { useToggle } from "react-use";

function CollectionProduct() {
  const [open, setOpen] = useToggle(false);
  return (
    <div className="box">
      <ProductResource open={open} toggle={setOpen} />
      <p className="box-title">Sản phẩm</p>
      <div className="">
        <div className="p-5 flex items-center gap-x-2">
          <Input placeholder="Tìm kiếm" />
          <Button type="primary" onClick={setOpen}>
            Browers
          </Button>
        </div>
        <Table
          dataSource={[
            {
              key: "1",
              name: "Mike",
              age: 32,
              address: "10 Downing Street",
            },
            {
              key: "2",
              name: "John",
              age: 42,
              address: "10 Downing Street",
            },
          ]}
          columns={[
            {
              title: "Name",
              dataIndex: "name",
              key: "name",
            },
            {
              title: "Age",
              dataIndex: "age",
              key: "age",
            },
            {
              title: "Address",
              dataIndex: "address",
              key: "address",
            },
            {
              title: "Action",
              dataIndex: "",
              key: "x",
              render: () => (
                <Button type="link" size="small">
                  Sửa
                </Button>
              ),
            },
          ]}
          pagination={false}
        />
      </div>
    </div>
  );
}

export default CollectionProduct;
