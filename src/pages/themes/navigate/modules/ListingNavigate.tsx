import { Button, Table } from "antd";
import { TableFilter } from "components";
import { useListingPage } from "hooks/themes";
import React, { useState } from "react";
import { FiCheck, FiX } from "react-icons/fi";
import { MdCancel } from "react-icons/md";
import { Link } from "react-router-dom";

function ListingNavigate() {
  const [params, setParams] = useState({
    page: 1,
    page_size: 10,
    keyword: "",
  });
  const { isLoading, data } = useListingPage(params);
  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <p className="text-lg font-semibold text-neutral-700">Danh sách page</p>
        <div className="flex items-center gap-2">
          <Link to="add">
            <Button type="primary">Thêm page</Button>
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
              render: (value) => <span>{value}</span>,
            },
            {
              key: "status",
              dataIndex: "status",
              title: "Hiển thị",
              render: (value) => (
                <span>
                  {value === "ACTIVE" ? (
                    <FiCheck className="text-2xl text-lime-600" />
                  ) : (
                    <FiX className="text-2xl text-red-500" />
                  )}
                </span>
              ),
            },
          ]}
        />
      </div>
    </div>
  );
}

export default ListingNavigate;
