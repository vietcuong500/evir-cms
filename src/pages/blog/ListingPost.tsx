import { Button, Input, Popover, Radio, Table, Tag } from "antd";
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
  console.log(data);
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
        <div className="px-5 py-3 border-b border-neutral-100">
          <div className="flex gap-2">
            <Input
              prefix={<MdSearch className="text-xl text-neutral-500" />}
              bordered={false}
              placeholder="Nhập từ khóa cần tìm kiếm"
            />
            <Button icon={<MdSearch className="text-xl text-neutral-500" />} />
            <Popover
              trigger="click"
              placement="bottomLeft"
              content={
                <div className="px-5 py-3">
                  <p className="font-semibold text-neutral-800 mb-2">
                    Sắp xếp theo
                  </p>
                  <Radio.Group>
                    <div className="flex flex-col">
                      <Radio name="order" value="id">
                        Mã đơn hàng
                      </Radio>
                      <Radio name="order" value="customer">
                        Khách hàng
                      </Radio>
                      <Radio name="order" value="date">
                        Thời gian
                      </Radio>
                      <Radio name="order" value="total">
                        Đơn gía
                      </Radio>
                    </div>
                  </Radio.Group>
                </div>
              }
            >
              <Button
                icon={<MdOutlineSort className="text-xl text-neutral-500" />}
              />
            </Popover>
          </div>
        </div>
        <Table
          size="small"
          dataSource={data ? data.data : []}
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
              render: (value) => <span>{value.name}</span>,
            },
            {
              key: "author",
              dataIndex: "author",
              title: "Tác giả",
              render: (value) => <span>{value.username}</span>,
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
