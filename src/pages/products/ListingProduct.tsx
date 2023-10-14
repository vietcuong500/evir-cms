import {
  Button,
  Input,
  Popover,
  Radio,
  Space,
  Table,
  Tag,
  Typography,
} from "antd";
import { Filter } from "components";
import React, { useState } from "react";
import { MdOutlineSort, MdSearch } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";

function ListingProduct() {
  const navigation = useNavigate;
  const [params, setParams] = useState({ page: 1, page_size: 10, keyword: "" });

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <p className="text-lg font-semibold text-neutral-700">
          Danh sách sản phẩm
        </p>
        <div className="flex items-center gap-2">
          <Button type="text" className="!bg-neutral-200">
            Import
          </Button>
          <Button type="text" className="!bg-neutral-200">
            Export
          </Button>
          <Link to="add">
            <Button type="primary">Thêm sản phẩm</Button>
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
        <div className="px-5 py-3">
          <Filter
            values={params}
            onChange={setParams}
            filters={[
              {
                name: "status",
                title: "Trạng thái",
                options: [
                  {
                    label: "Chờ xác nhận",
                    value: "paid",
                  },
                  {
                    label: "Đã xác nhận",
                    value: "active",
                  },
                ],
              },
            ]}
          />
        </div>
        <Table
          size="small"
          pagination={false}
          dataSource={[
            {
              key: 1,
              id: "#1001",
              name: "Iphone 15",
              price: "14.000.000 VND",
              quantity: 13,
              status: "active",
            },
            {
              key: 2,
              id: "#1001",
              name: "Iphone 13",
              price: "14.000.000 VND",
              quantity: 21,
              status: "active",
            },
          ]}
          columns={[
            {
              key: "img",
              dataIndex: "img",
              title: "",
              width: 30,
              render: () => (
                <div className="w-8 h-10 rounded bg-neutral-200"></div>
              ),
            },
            {
              key: "name",
              dataIndex: "name",
              title: "Tên sản phẩm",
            },

            {
              key: "status",
              dataIndex: "status",
              title: "Trạng thái",
              render: (value) => (
                <Tag bordered={false} color="success">
                  <span className="mr-2 w-2 h-2 rounded-full bg-green-500 inline-block"></span>
                  {value}
                </Tag>
              ),
            },
            {
              key: "inventory",
              dataIndex: "inventory",
              title: "Tồn kho",
            },
            {
              key: "price",
              dataIndex: "price",
              title: "Giá bán",
            },
          ]}
        />
      </div>
    </div>
  );
}

export default ListingProduct;
