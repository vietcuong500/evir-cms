import { Button, Input, Popover, Radio, Table, Tag } from "antd";
import { TableFilter } from "components";
import React, { useState } from "react";
import { MdOutlineSort, MdSearch } from "react-icons/md";
import { Link } from "react-router-dom";
import { useToggle } from "react-use";
import { DiscountType } from "./components";
import { useListingDiscount } from "./hook";

function ListingDiscount() {
  const [open, setOpen] = useToggle(false);
  const [params, setParams] = useState({
    page: 1,
    page_size: 10,
    keyword: "",
  });

  const { isLoading, data, isSuccess } = useListingDiscount(params);
  return (
    <div>
      <DiscountType open={open} toggle={setOpen} />
      <div className="flex items-center justify-between mb-4">
        <p className="text-lg font-semibold text-neutral-700">Khuyến mãi</p>
        <div className="flex items-center gap-2">
          <Button type="text" className="!bg-neutral-200">
            Export
          </Button>
          <Button onClick={setOpen} type="primary">
            Thêm khuyến mãi
          </Button>
        </div>
      </div>
      <div className="box overflow-hidden">
        <TableFilter />

        <Table
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
                    to={"/discounts/" + record.id}
                    className="font-semibold text-neutral-700"
                  >
                    {value}
                  </Link>
                  <p className="text-neutral-700">10% OFF</p>
                </div>
              ),
            },
            {
              key: "status",
              dataIndex: "status",
              title: "Trạng thái",
              render: (value) => (
                <Tag color="success" bordered={false}>
                  {value}
                </Tag>
              ),
            },
            {
              key: "method",
              dataIndex: "method",
              title: "Method",
            },
            {
              key: "type",
              dataIndex: "type",
              title: "Loại giảm giá",
            },
            {
              key: "used",
              dataIndex: "used",
              title: "Đã sử dụng",
            },
          ]}
        />
      </div>
    </div>
  );
}

export default ListingDiscount;
