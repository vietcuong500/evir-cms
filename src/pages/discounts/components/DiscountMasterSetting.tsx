import { Button, Input, Radio, Table } from "antd";
import React from "react";

function DiscountMasterSetting() {
  return (
    <div className="box">
      <p className="box-title">Thiết lập</p>
      <div className="px-5 py-3 flex flex-col gap-4">
        <div className="flex gap-4">
          <Radio.Group className="!flex !w-1/3">
            <Radio.Button value="fixed_amount">Fixed amount</Radio.Button>
            <Radio.Button value="percentage">Percentage</Radio.Button>
          </Radio.Group>
          <Input className="!w-2/3" placeholder="Số lượng giảm" />
        </div>
        <div>
          <p className="font-semibold text-neutral-700 mb-2">Áp dụng</p>
          <Radio.Group className="!flex !flex-col">
            <Radio value="collection">Bộ sưu tập</Radio>
            <Radio value="product">Sản phẩm</Radio>
          </Radio.Group>

          <div className="mt-2 flex gap-4">
            <Input placeholder="Nhập từ khóa tìm kiếm" />
            <Button>Browers</Button>
          </div>
        </div>
      </div>
      <Table
        pagination={false}
        dataSource={[
          {
            key: 1,
            name: "IPhone 4",
            status: "active",
            price: "2.000.000 VND",
            discount: "1.800.000 VND",
          },
        ]}
        columns={[
          {
            dataIndex: "img",
            title: "",
            key: "img",
            width: 30,
            render: () => (
              <div className="w-8 h-10 bg-neutral-600 rounded"></div>
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
            dataIndex: "discount",
            key: "discount",
            title: "Giảm giá",
          },
          {
            dataIndex: "",
            key: "actions",
            title: "",
            render: () => <Button type="link">Xóa</Button>,
          },
        ]}
      />
    </div>
  );
}

export default DiscountMasterSetting;
