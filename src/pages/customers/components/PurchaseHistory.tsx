import { Button, Input, Table, Tag } from "antd";
import React from "react";
import { MdSearch } from "react-icons/md";

function PurchaseHistory() {
  return (
    <div className="box">
      <p className="box-title">Lịch sử mua hàng</p>
      <div className="px-5 py-3 border-b border-neutral-100">
        <p className="text-neutral-700">
          This customer hasn’t placed any orders yet
        </p>
        <Button className="mt-3">Tạo đơn hàng</Button>
      </div>
      <div className="px-5 py-3 flex items-center gap-x-2">
        <Input prefix={<MdSearch className="text-xl text-neutral-500" />} placeholder="Tìm kiếm" />
        <Button type="primary">Browers</Button>
      </div>
      <Table
        size="small"
        pagination={false}
        dataSource={[
          {
            key: 1,
            id: "#1001",
            date: "21/10/2021 3:32 AM",
            customer: "Nguyễn Việt Cường",
            total: "14.000.000 VND",
            items: 1,
            status: "paid",
          },
          {
            key: 2,
            id: "#1002",
            date: "11/08/2021 3:32 AM",
            customer: "Nguyễn Việt Cường",
            total: "3.000.000 VND",
            items: 1,
            status: "paid",
          },
        ]}
        columns={[
          {
            key: "id",
            dataIndex: "id",
            title: "",
          },
          {
            key: "date",
            dataIndex: "date",
            title: "Thời gian",
          },
          {
            key: "status",
            dataIndex: "status",
            title: "Trạng thái",
            render: (value) => (
              <Tag bordered={false} color="default">
                <span className="mr-2 w-2 h-2 rounded-full bg-neutral-500 inline-block"></span>
                {value}
              </Tag>
            ),
          },
          {
            key: "items",
            dataIndex: "items",
            title: "Sản phẩm",
            render: (value) => `${value} sản phẩm`,
          },
          {
            key: "total",
            dataIndex: "total",
            title: "Đơn giá",
          },
        ]}
      />
    </div>
  );
}

export default PurchaseHistory;
