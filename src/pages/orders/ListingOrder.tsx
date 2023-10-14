import { Button, Divider, Input, Popover, Radio, Table, Tag } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  MdOutlinePlusOne,
  MdOutlineSort,
  MdPlusOne,
  MdSearch,
} from "react-icons/md";
import { FiPlus } from "react-icons/fi";
import { Filter } from "components";

function ListingOrder() {
  const [params, setParams] = useState({ page: 1, page_size: 10, keyword: "" });

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <p className="text-lg font-semibold text-neutral-700">
          Danh sách đơn hàng
        </p>
        <div className="flex items-center gap-2">
          <Button type="text" className="!bg-neutral-200" >Export</Button>
          <Link to="add">
            <Button type="primary">Thêm đơn hàng</Button>
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
              date: "21/10/2021 3:32 AM",
              customer: "Nguyễn Việt Cường",
              total: "14.000.000 VND",
              items: 1,
              status: "paid",
            },
          ]}
          columns={[
            {
              key: "id",
              dataIndex: "id",
              title: "",
            },
            {
              key: "date",
              dataIndex: "date",
              title: "Thời gian",
            },
            {
              key: "customer",
              dataIndex: "customer",
              title: "Khách hàng",
            },
            {
              key: "status",
              dataIndex: "status",
              title: "Trạng thái",
              render: (value) => (
                <Tag bordered={false} color="default">
                  <span className="mr-2 w-2 h-2 rounded-full bg-neutral-500 inline-block"></span>
                  {value}
                </Tag>
              ),
            },
            {
              key: "items",
              dataIndex: "items",
              title: "Sản phẩm",
              render: (value) => `${value} sản phẩm`,
            },
            {
              key: "total",
              dataIndex: "total",
              title: "Đơn giá",
            },
          ]}
        />
      </div>
    </div>
  );
}

export default ListingOrder;
