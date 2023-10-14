import { Button, Input, Popover, Radio, Table, Tag } from "antd";
import { Filter } from "components";
import React, { useState } from "react";
import { MdOutlineSort, MdSearch } from "react-icons/md";
import { Link } from "react-router-dom";

function ListingCustomer() {
  const [params, setParams] = useState({ page: 1, page_size: 10, keyword: "" });

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <p className="text-lg font-semibold text-neutral-700">
          Danh sách khách hàng
        </p>
        <div className="flex items-center gap-2">
          <Button type="text" className="!bg-neutral-200">
            Import
          </Button>
          <Button type="text" className="!bg-neutral-200">
            Export
          </Button>
          <Link to="add">
            <Button type="primary">Thêm khách hàng</Button>
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
              name: "Nguyễn Việt Cường",
              phone: "097571721",
              total: "14.000.000 VND",
              orders: 1,
              status: "active",
              address: "KĐT Dương Nội, Hà Đông, Hà Nội",
            },
            // {
            //   key: 2,
            //   id: "#1001",
            //   name: "Iphone 13",
            //   total: "14.000.000 VND",
            //   orders: 2,
            //   status: "active",
            // },
          ]}
          columns={[
            {
              key: "id",
              dataIndex: "id",
              title: "Mã khách hàng",
              render: (value) => <Link to="detail">{value}</Link>,
            },
            {
              key: "name",
              dataIndex: "name",
              title: "Tên khách hàng",
            },
            {
              key: "phone",
              dataIndex: "phone",
              title: "Số điện thoại",
            },
            {
              key: "address",
              dataIndex: "address",
              title: "Địa chỉ",
            },
            {
              key: "orders",
              dataIndex: "orders",
              title: "Đơn hàng",
            },
            {
              key: "total",
              dataIndex: "total",
              title: "Đã thanh toán",
            },
          ]}
        />
      </div>
    </div>
  );
}

export default ListingCustomer;
