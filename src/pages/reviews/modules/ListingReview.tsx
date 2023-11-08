import { Button, Table, Tag } from "antd";
import { TableFilter } from "components";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useListingReview } from "../hooks";
import { Rate } from "antd";

function ListingReview() {
  const [params, setParams] = useState({
    page: 1,
    page_size: 10,
    keyword: "",
  });

  const { isLoading, data, isSuccess } = useListingReview(params);
  console.log(data);
  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <p className="text-lg font-semibold text-neutral-700">Bình luận</p>
        {/* <div className="flex items-center gap-2">
          <Link to="/comment/add">
            <Button type="primary">Thêm bình luận</Button>
          </Link>
        </div> */}
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
              key: "user",
              dataIndex: "user",
              title: "Khách hàng",
              render: (value) => <span>{value.username}</span>,
            },
            {
              key: "star",
              dataIndex: "star",
              title: "Đánh giá",
              render: (value) => <Rate defaultValue={value} count={5} />,
            },
            {
              key: "content",
              dataIndex: "content",
              title: "Nhận xét",
            },
            {
              key: "order_detail",
              dataIndex: "order_detail",
              title: "Sản phẩm",
              render: (value) => <span>{value.product.name}</span>,
            },
          ]}
        />
      </div>
    </div>
  );
}

export default ListingReview;
