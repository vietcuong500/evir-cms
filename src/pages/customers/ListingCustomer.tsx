import { Button, Input, Popover, Radio, Table, Tag } from "antd";
import { Filter, TableFilter } from "components";
import { useListingUser } from "pages/user/hook";
import React, { useState } from "react";
import { MdOutlineSort, MdSearch } from "react-icons/md";
import { Link } from "react-router-dom";

function ListingCustomer() {
  const [params, setParams] = useState({ page: 1, page_size: 10, keyword: "" });
  const { isLoading, data } = useListingUser(params);

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <p className="text-lg font-semibold text-neutral-700">
          Danh sách khách hàng
        </p>
        <div className="flex items-center gap-2">
          <Button type="text" className="!bg-neutral-200">
            Import
          </Button>
          <Button type="text" className="!bg-neutral-200">
            Export
          </Button>
          <Link to="add">
            <Button type="primary">Thêm khách hàng</Button>
          </Link>
        </div>
      </div>
      <div className="box overflow-hidden">
        <TableFilter />
        <div className="px-5 py-3">
          <Filter
            values={params}
            onChange={setParams}
            filters={[
              {
                name: "status",
                title: "Trạng thái",
                options: [
                  {
                    label: "Chờ xác nhận",
                    value: "paid",
                  },
                  {
                    label: "Đã xác nhận",
                    value: "active",
                  },
                ],
              },
            ]}
          />
        </div>
        <Table
          pagination={{
            total: data ? data.total : 0,
            pageSize: 10,
            onChange(page) {
              setParams({
                ...params,
                page,
              });
            },
          }}
          size="small"
          loading={isLoading}
          dataSource={
            data ? data.data.map((el: any) => ({ ...el, key: el.id })) : []
          }
          columns={[
            {
              key: "id",
              dataIndex: "id",
              title: "Mã khách hàng",
              render: (value) => <Link to="detail">#{value}</Link>,
            },
            {
              key: "username",
              dataIndex: "username",
              title: "Tên tài khoản",
            },
            {
              key: "email",
              dataIndex: "email",
              title: "Email",
            },
            {
              key: "status",
              dataIndex: "status",
              title: "Trạng thái",
              render: (value) => (
                <Tag color={value === "ACTIVE" ? "success" : "warning"}>
                  {value === "ACTIVE" ? "Đang hoạt đông" : "Ban"}
                </Tag>
              ),
            },
            {
              key: "orders",
              dataIndex: "orders",
              title: "Đơn hàng",
            },
            {
              key: "total",
              dataIndex: "total",
              title: "Đã thanh toán",
            },
          ]}
        />
      </div>
    </div>
  );
}

export default ListingCustomer;
