import { Button, Divider, Input, Popover, Radio, Table, Tabs, Tag } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  MdOutlinePlusOne,
  MdOutlineSort,
  MdPlusOne,
  MdSearch,
} from "react-icons/md";
import { FiPlus } from "react-icons/fi";
import { Filter, TableFilter } from "components";
import { useListingOrder } from "./hook";
import moment from "moment";

export type STATUS_ORDER =
  | "NEW_ORDER"
  | "WAITING_DELIVERING"
  | "DELIVERING"
  | "DELIVERED"
  | "CANCELLED";

function ListingOrder() {
  const [params, setParams] = useState({
    page: 1,
    page_size: 10,
    keyword: "",
    filter_status: "NEW_ORDER",
  });
  const { isLoading, data } = useListingOrder(params);
  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <p className="text-lg font-semibold text-neutral-700">
          Danh sách đơn hàng
        </p>
        <div className="flex items-center gap-2">
          <Button type="text" className="!bg-neutral-200">
            Export
          </Button>
          <Link to="add">
            <Button type="primary">Thêm đơn hàng</Button>
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
        <div className="px-5">
          <Tabs
            className=""
            defaultActiveKey="NEW_ORDER"
            onChange={(value) => setParams({ ...params, filter_status: value })}
            items={[
              {
                key: "NEW_ORDER",
                label: "Chờ xác nhận",
              },
              {
                key: "WAITING_DELIVERING",
                label: "Chờ giao hàng",
              },
              {
                key: "DELIVERING",
                label: "Đang vận chuyển",
              },
              {
                key: "DELIVERED",
                label: "Giao hàng thành công",
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
          dataSource={
            data ? data.data.map((el: any) => ({ ...el, key: el.id })) : []
          }
          columns={[
            {
              key: "id",
              dataIndex: "id",
              title: "",
              render: (value) => <Link to={`/orders/${value}`}>#{value}</Link>,
            },
            {
              key: "order_date",
              dataIndex: "date",
              title: "Thời gian",
              render: (value) => moment(value).format("DD/MM/YYYY"),
            },
            {
              key: "customer",
              dataIndex: "customer",
              title: "Khách hàng",
            },
            {
              key: "status",
              dataIndex: "status",
              title: "Trạng thái",
              render: (value, record) => (
                <div className="inline-flex flex-col">
                  <p className="font-semibold">{record.payment_type}</p>
                  <Tag bordered={false} color="default">
                    <span className="mr-2 w-2 h-2 rounded-full bg-neutral-500 inline-block"></span>
                    {value}
                  </Tag>
                </div>
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
              render: (value) => <span>{value}</span>,
            },
          ]}
        />
      </div>
    </div>
  );
}

export default ListingOrder;
