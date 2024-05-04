import { Button, Input, Table } from "antd";
import { TableFilter } from "components";
import React, { useState } from "react";
import { MdSearch } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { useListingCategory } from "../hook";

function ListingCategory() {
  const navigate = useNavigate();
  const [params, setParams] = useState({
    keyword: "",
    page: 1,
    page_size: 10,
  });

  const { isLoading, data } = useListingCategory(params);
  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <p className="text-lg font-semibold text-neutral-700">
          Danh mục bài viết
        </p>
        <div className="flex items-center gap-2">
          <Button onClick={() => navigate("/category/add")} type="primary">
            Thêm danh mục
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
            data ? data.data.map((el: any) => ({ ...el, key: el.id })) : []
          }
          columns={[
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
              key: "status",
              dataIndex: "status",
              title: "Trạng thái",
            },
            {
              key: "quantity",
              dataIndex: "quantity",
              title: "Số lượng bài viết",
            },
          ]}
        />
      </div>
    </div>
  );
}

export default ListingCategory;
