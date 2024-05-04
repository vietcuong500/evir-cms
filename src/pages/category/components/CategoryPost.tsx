import { Button, Input, Table, Tag } from "antd";
import React from "react";
import { FiTrash } from "react-icons/fi";

function CategoryPost() {
  return (
    <div className="box">
      <p className="box-title">Bài viết</p>
      <div className="">
        <div className="p-5 flex items-center gap-x-2">
          <Input placeholder="Tìm kiếm" />
          <Button type="primary">Browers</Button>
        </div>
        <Table
          dataSource={[
            {
              key: "1",
              name: "Mike",
              author: "Minhkhang",
              status: "ACTIVE",
            },
            {
              key: "2",
              name: "Bài 1",
              author: "Admin",
              status: "ACTIVE",
            },
          ]}
          columns={[
            {
              title: "Tên bào viết",
              dataIndex: "name",
              key: "name",
            },
            {
              title: "Tác giả",
              dataIndex: "author",
              key: "author",
            },
            {
              title: "Trạng thái",
              dataIndex: "status",
              key: "status",

              render: (value) => (
                <Tag color={value === "ACTIVE" ? "blue" : "gold"}>
                  {value === "ACTIVE" ? "Đã xuất bản" : "Bản nháp"}
                </Tag>
              ),
            },
            {
              title: "Action",
              dataIndex: "",
              key: "x",
              render: () => (
                <Button type="link" size="small">
                  <FiTrash />
                </Button>
              ),
            },
          ]}
          pagination={false}
        />
      </div>
    </div>
  );
}

export default CategoryPost;
