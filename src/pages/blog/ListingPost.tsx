import { Button, Input, Popover, Radio, Table, Tag } from "antd";
import { TableFilter } from "components";
import { useListingPosts } from "hooks/posts";
import React, { useState } from "react";
import { MdOutlineSort, MdSearch } from "react-icons/md";
import { Link } from "react-router-dom";

function ListingPost() {
  const [params, setParams] = useState({
    keyword: "",
    page: 1,
    page_size: 10,
  });

  const { isLoading, data } = useListingPosts(params);
  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <p className="text-lg font-semibold text-neutral-700">Bài viết</p>
        <div className="flex items-center gap-2">
          <Link to="add">
            <Button type="primary">Thêm bài viết</Button>
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
          dataSource={
            data ? data.data.map((el: any) => ({ ...el, key: el.id })) : []
          }
          columns={[
            {
              key: "title",
              dataIndex: "title",
              title: "Tên bài viết",
              render: (value, record) => (
                <Link to={`/posts/${record.id}`}>{value}</Link>
              ),
            },
            {
              key: "category",
              dataIndex: "category",
              title: "Danh mục",
              render: (value) => <span>{value?.name}</span>,
            },
            {
              key: "author",
              dataIndex: "author",
              title: "Tác giả",
              render: (value) => <span>{value?.username}</span>,
            },
            {
              key: "status",
              dataIndex: "status",
              title: "Trạng thái",

              render: (value) => (
                <Tag color={value === "ACTIVE" ? "blue" : "gold"}>
                  {value === "ACTIVE" ? "Đã xuất bản" : "Bản nháp"}
                </Tag>
              ),
            },
            {
              key: "created_at",
              dataIndex: "created_at",
              title: "Ngày đăng",
            },
          ]}
        />
      </div>
    </div>
  );
}

export default ListingPost;
