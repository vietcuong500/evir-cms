import {
  Button,
  Input,
  Popover,
  Radio,
  Space,
  Table,
  Tag,
  Typography,
} from "antd";
import { Filter, TableFilter } from "components";
import { useListingProduct } from "hooks/product";
import React, { useState } from "react";
import { MdOutlineSort, MdSearch } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { useDebounce } from "react-use";

function ListingProduct() {
  const navigation = useNavigate;
  const [params, setParams] = useState({ page: 1, page_size: 10, keyword: "" });

  const { isLoading, data } = useListingProduct(params);

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <p className="text-lg font-semibold text-neutral-700">
          Danh sách sản phẩm
        </p>
        <div className="flex items-center gap-2">
          <Link to="add">
            <Button type="primary">Thêm sản phẩm</Button>
          </Link>
        </div>
      </div>
      <div className="box overflow-hidden">
      <TableFilter
          onChange={(val: string) => setParams({ ...params, keyword: val, page: 1 })}
        />
        <div className="px-5 py-3">
          {/* <Filter
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
          /> */}
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
              key: "images",
              dataIndex: "images",
              title: "",
              width: 30,
              render: (value, record) => (
                <div className="w-8 h-10 rounded bg-neutral-200">
                  <img
                    alt={record.name}
                    src={value}
                    className="w-full h-full object-cover"
                  />
                </div>
              ),
            },
            {
              key: "name",
              dataIndex: "name",
              title: "Tên sản phẩm",
              render: (value, record) => (
                <Link
                  state={{
                    item: record,
                  }}
                  to={`${record.id}`}
                >
                  {value}
                </Link>
              ),
            },
            {
              key: "category",
              dataIndex: "category",
              title: "Danh mục",
              render: (value) => <span>{value?.name}</span>,
            },

            {
              key: "status",
              dataIndex: "status",
              title: "Trạng thái",
              render: (value) => (
                <Tag
                  bordered={false}
                  color={value === "ACTIVE" ? "success" : "warning"}
                >
                  <span className="mr-2 w-2 h-2 rounded-full inline-block"></span>
                  {value === "ACTIVE" ? "Xuất bản" : "Bản nháp"}
                </Tag>
              ),
            },
            {
              key: "stock",
              dataIndex: "stock",
              title: "Tồn kho",
            },
            {
              key: "price",
              dataIndex: "price",
              title: "Giá bán",
            },
          ]}
        />
      </div>
    </div>
  );
}

export default ListingProduct;
