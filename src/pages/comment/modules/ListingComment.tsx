import { Button, Table, Tag } from "antd";
import { TableFilter } from "components";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useListingComment } from "../hook";

function ListingComment() {
  const [params, setParams] = useState({
    page: 1,
    page_size: 10,
    keyword: "",
  });

  const { isLoading, data, isSuccess } = useListingComment(params);
  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <p className="text-lg font-semibold text-neutral-700">Bình luận</p>
        <div className="flex items-center gap-2">
          <Link to="/comment/add">
            <Button type="primary">Thêm bình luận</Button>
          </Link>
        </div>
      </div>
      <div className="box overflow-hidden">
        <TableFilter />

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
              key: "content",
              dataIndex: "content",
              title: "Bình luận",
              render: (value, record) => (
                <Link
                  // state={{
                  //   item: record,
                  // }}
                  to={"/comment/" + record.id}
                >
                  {value}
                </Link>
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
              key: "user",
              dataIndex: "user",
              title: "Tác giả",
              render: (value) => <span>{value.username}</span>,
            },
            {
              key: "post",
              dataIndex: "post",
              title: "Bài viết",
              render: (value) => <span>{value.title}</span>,
            },
          ]}
        />
      </div>
    </div>
  );
}

export default ListingComment;
