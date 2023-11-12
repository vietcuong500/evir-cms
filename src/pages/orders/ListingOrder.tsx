import {
  Button,
  Divider,
  Input,
  Popover,
  Radio,
  Table,
  Tabs,
  Tag,
  Tooltip,
} from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  MdOutlinePlusOne,
  MdOutlineSort,
  MdPlusOne,
  MdSearch,
} from "react-icons/md";
import { FiCheck, FiPlus } from "react-icons/fi";
import { Filter, TableFilter } from "components";
import { useChangeStatusOrder, useListingOrder } from "./hook";
import moment from "moment";
import { ORDER_STATUS, PAYMENT_STATUS } from "types/common";
import { formatCurrency } from "utlis/common";

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
  const { isLoading, data, refetch, isPlaceholderData } =
    useListingOrder(params);
  const { isPending, mutateAsync } = useChangeStatusOrder();
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
            onChange={(value) => setParams({ ...params, filter_status: value, page: 1 })}
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
              {
                key: "CANCELLED",
                label: "Đã hủy",
              },
            ]}
          />
        </div>
        <Table
          loading={isLoading || isPlaceholderData}
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
              render: (value) => <Link to={`${value}`}>#{value}</Link>,
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
              key: "payment_type",
              dataIndex: "payment_type",
              title: "Phương thức thanh toán",
              render: (value, record) => (
                <div className="inline-flex flex-col">
                  <p className="font-semibold">{value}</p>
                  <Tag
                    bordered={false}
                    color={
                      record.payment_status === "PAID" ? "success" : "warning"
                    }
                  >
                    {PAYMENT_STATUS[record.payment_status]}
                  </Tag>
                </div>
              ),
            },
            {
              key: "status",
              dataIndex: "status",
              title: "Trạng thái",
              render: (value, record) => (
                <div className="inline-flex flex-col">
                  {/* <p className="font-semibold">{record.payment_type}</p> */}
                  <Tag bordered={false} color="default">
                    <span className="mr-2 w-2 h-2 rounded-full bg-neutral-500 inline-block"></span>
                    {ORDER_STATUS[value]}
                  </Tag>
                </div>
              ),
            },
            {
              key: "order_details",
              dataIndex: "order_details",
              title: "Sản phẩm",
              render: (value) => `${value.length} sản phẩm`,
            },
            {
              key: "total",
              dataIndex: "total",
              title: "Đơn giá",
              render: (value) => <span>{formatCurrency(value)} vnd</span>,
            },
            {
              key: "actions",
              dataIndex: "",
              title: "",
              render: (value, record) => (
                <div>
                  {record.status === "NEW_ORDER" ? (
                    <Tooltip title="Xác nhận đơn hàng">
                      <Button
                        onClick={async () => {
                          const res = await mutateAsync({
                            id: record.id,
                            status: "WAITING_DELIVERING",
                          });
                          refetch();
                        }}
                        type="link"
                        // icon={<FiCheck className="text-2xl" />}
                      >
                        Xác nhận
                      </Button>
                    </Tooltip>
                  ) : record.status === "WAITING_DELIVERING" ? (
                    <Tooltip title="Xác nhận đơn hàng">
                      <Button
                        onClick={async () => {
                          const res = await mutateAsync({
                            id: record.id,
                            status: "DELIVERING",
                          });
                          refetch();
                        }}
                        type="link"
                        // icon={<FiCheck className="text-2xl" />}
                      >
                        Giao hàng
                      </Button>
                    </Tooltip>
                  ) : record.status === "DELIVERING" ? (
                    <Tooltip title="Xác nhận đơn hàng">
                      <Button
                        onClick={async () => {
                          const res = await mutateAsync({
                            id: record.id,
                            status: "DELIVERED",
                          });
                          refetch();
                        }}
                        type="link"
                        // icon={<FiCheck className="text-2xl" />}
                      >
                        Hoàn thành
                      </Button>
                    </Tooltip>
                  ) : null}
                </div>
              ),
            },
          ]}
        />
      </div>
    </div>
  );
}

export default ListingOrder;
