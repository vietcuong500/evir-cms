import { Button, Input, Popover, Radio, Table, Tag, Typography } from "antd";
import { useListingCollection } from "hooks/collection";
import React, { useState } from "react";
import { MdOutlineSort, MdSearch } from "react-icons/md";
import { Link } from "react-router-dom";

function ListingCollection() {
  const [params, setParams] = useState({
    page: 1,
    page_size: 10,
    keyword: "",
  });
  const { isLoading, data } = useListingCollection(params);
  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <p className="text-lg font-semibold text-neutral-700">
          Danh mục sản phẩm
        </p>
        <div className="flex items-center gap-2">
          <Button type="text" className="!bg-neutral-200">
            Import
          </Button>
          <Button type="text" className="!bg-neutral-200">
            Export
          </Button>
          <Link to="add">
            <Button type="primary">Thêm danh mục</Button>
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
              title: "Tên danh mục",
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
              key: "active",
              dataIndex: "active",
              title: "Trạng thái",
              render: (value) => (
                <Tag bordered={false} color="success">
                  {value}
                </Tag>
              ),
            },
            {
              key: "items",
              dataIndex: "items",
              title: "Số lượng sản phẩm",
              render: (value) => <p>{value} sản phẩm</p>,
            },
          ]}
        />
      </div>
    </div>
  );
}

export default ListingCollection;
