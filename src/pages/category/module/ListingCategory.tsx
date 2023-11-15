import { Button, Input, Table } from "antd";
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
        <div className="px-5 py-3 border-b border-neutral-100">
          <div className="flex gap-2">
            <Input
              prefix={<MdSearch className="text-xl text-neutral-500" />}
              bordered={false}
              placeholder="Nhập từ khóa cần tìm kiếm"
            />
            <Button icon={<MdSearch className="text-xl text-neutral-500" />} />
          </div>
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
