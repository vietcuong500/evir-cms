import { Button, Table } from "antd";
import { useListingPage } from "hooks/themes";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function ListingNavigate() {
  const [params, setParams] = useState({
    page: 1,
    page_size: 10,
  });
  const { isLoading, data } = useListingPage(params);
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
              key: "title",
              dataIndex: "title",
              title: "Tiêu đề",
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
              key: "slug",
              dataIndex: "slug",
              title: "Điều hướng",
              render: (value) => <span>{value?.name}</span>,
            },
          ]}
        />
      </div>
    </div>
  );
}

export default ListingNavigate;
