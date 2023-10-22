import { Button, Input, Table } from "antd";
import React, { useState } from "react";
import { MdSearch } from "react-icons/md";
import { Link } from "react-router-dom";
import { useListingCategory } from "../hook";

function ListingCategory() {
  const [params, setParams] = useState({
    keyword: "",
    page: 1,
    page_size: 10,
  });

  const { isLoading, data } = useListingCategory(params);
  console.log(data);
  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <p className="text-lg font-semibold text-neutral-700">
          Danh mục bài viết
        </p>
        <div className="flex items-center gap-2">
          <Button type="primary">Thêm danh mục</Button>
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
          size="small"
          loading={isLoading}
          dataSource={data ? data.data : []}
          columns={[
            {
              key: "name",
              dataIndex: "name",
              title: "Tên sản phẩm",
              // render: (value, record) => (
              //   <Link
              //     state={{
              //       item: record,
              //     }}
              //     to={`/products/${record.id}`}
              //   >
              //     {value}
              //   </Link>
              // ),
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
