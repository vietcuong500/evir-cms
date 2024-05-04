import { Button, Input, Popover, Radio, Table, Tag } from "antd";
import { TableFilter } from "components";
import moment from "moment";
import React, { useState } from "react";
import { MdOutlineSort, MdSearch } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { useToggle } from "react-use";
import { formatCurrency } from "utlis/common";
import { DiscountType } from "./components";
import { useListingDiscount } from "./hook";

function ListingDiscount() {
  const [open, setOpen] = useToggle(false);
  const [params, setParams] = useState({
    page: 1,
    page_size: 10,
    keyword: "",
  });
  const navigate = useNavigate();

  const { isLoading, data, isSuccess } = useListingDiscount(params);
  return (
    <div>
      <DiscountType open={open} toggle={setOpen} />
      <div className="flex items-center justify-between mb-4">
        <p className="text-lg font-semibold text-neutral-700">Khuyến mãi</p>
        <div className="flex items-center gap-2">
          <Button
            onClick={() => navigate("add?type=discount-master")}
            type="primary"
          >
            Thêm khuyến mãi
          </Button>
        </div>
      </div>
      <div className="box overflow-hidden">
        <TableFilter
          onChange={(val: string) => setParams({ ...params, keyword: val, page: 1 })}
        />

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
            isSuccess ? data.data.map((el: any) => ({ ...el, key: el.id })) : []
          }
          columns={[
            {
              key: "name",
              dataIndex: "name",
              title: "Khuyến mãi",
              render: (value, record) => (
                <div>
                  <Link
                    to={`${record.id}`}
                    className="font-semibold text-neutral-700"
                  >
                    {value}
                  </Link>
                  <p className="text-neutral-700 text-xs font-medium">
                    {record.type === "FIXED"
                      ? `${formatCurrency(record.value)}VND`
                      : `${record.value}%`}{" "}
                    OFF
                  </p>
                </div>
              ),
            },
            // {
            //   key: "status",
            //   dataIndex: "status",
            //   title: "Trạng thái",
            //   render: (value, record) => {
            //     const format = "DD/MM/YYYY";
            //     const start_date = moment(record.start_date).format(format);
            //     const end_date = moment(record.end_date).format(format);
            //     const now_date = moment().format(format);
            //     console.log(now_date, start_date, end_date)
            //     if (moment(now_date).isBetween(start_date, end_date))
            //       return <Tag color="success">Đang hoạt động</Tag>;
            //     // if(moment().isBefore(start_date))
            //     //   return <Tag></Tag>
            //     return null;
            //   },
            // },
            {
              key: "time",
              dataIndex: "time",
              title: "Thời gian hoạt động",
              render: (value, record) => (
                <span>
                  {moment(record.start_date).format("DD/MM/YYYY")}
                  {" - "}
                  {moment(record.end_date).format("DD/MM/YYYY")}
                </span>
              ),
            },
            // {
            //   key: "method",
            //   dataIndex: "method",
            //   title: "Method",
            // },
            {
              key: "type",
              dataIndex: "type",
              title: "Loại giảm giá",
              render: (value) => (
                <span>
                  {value === "FIXED"
                    ? "Giả giá trực tiếp"
                    : "Giả giá theo phần trăm"}
                </span>
              ),
            },
            {
              key: "used",
              dataIndex: "used",
              title: "Sản phẩm áp dụng",
              render: (value, record) => (
                <span>{record.products.length} sản phẩm</span>
              ),
            },
          ]}
        />
      </div>
    </div>
  );
}

export default ListingDiscount;
