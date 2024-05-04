import { Button, Input, Popover, Radio, Table, Tag, Typography } from "antd";
import { TableFilter } from "components";
import { useListingCollection } from "hooks/collection";
import React, { useState } from "react";
import { MdOutlineSort, MdSearch } from "react-icons/md";
import { Link } from "react-router-dom";
import { useDebounce } from "react-use";

function ListingCollection() {
  const [params, setParams] = useState({
    page: 1,
    page_size: 10,
    keyword: "",
  });
  const { isLoading, data } = useListingCollection(params);
  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <p className="text-lg font-semibold text-neutral-700">
          Danh mục sản phẩm
        </p>
        <div className="flex items-center gap-2">
          {/* <Button type="text" className="!bg-neutral-200">
            Import
          </Button>
          <Button type="text" className="!bg-neutral-200">
            Export
          </Button> */}
          <Link to="add">
            <Button type="primary">Thêm danh mục</Button>
          </Link>
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
            data ? data.data.map((el: any) => ({ ...el, key: el.id })) : []
          }
          columns={[
            {
              key: "name",
              dataIndex: "name",
              title: "Tên danh mục",
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
              key: "active",
              dataIndex: "active",
              title: "Trạng thái",
              render: (value) => (
                <Tag bordered={false} color="success">
                  {value}
                </Tag>
              ),
            },
            {
              key: "num_of_products",
              dataIndex: "num_of_products",
              title: "Số lượng sản phẩm",
              render: (value) => <p>{value} sản phẩm</p>,
            },
          ]}
        />
      </div>
    </div>
  );
}

export default ListingCollection;
