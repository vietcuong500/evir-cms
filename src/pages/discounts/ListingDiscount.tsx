import { Button, Input, Popover, Radio, Table, Tag } from "antd";
import React from "react";
import { MdOutlineSort, MdSearch } from "react-icons/md";
import { Link } from "react-router-dom";
import { useToggle } from "react-use";
import { DiscountType } from "./components";

function ListingDiscount() {
  const [open, setOpen] = useToggle(false);
  return (
    <div>
      <DiscountType open={open} toggle={setOpen} />
      <div className="flex items-center justify-between mb-4">
        <p className="text-lg font-semibold text-neutral-700">Khuyến mãi</p>
        <div className="flex items-center gap-2">
          <Button type="text" className="!bg-neutral-200">
            Export
          </Button>
          <Button onClick={setOpen} type="primary">
            Thêm khuyến mãi
          </Button>
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
          pagination={false}
          dataSource={[
            {
              key: 1,
              title: "Sale up 10%",
              status: "Đang diễn ra",
              method: "automatic", //code automatic
              type: "Giảm giá trực tiếp",
              used: 0,
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
              key: "title",
              dataIndex: "title",
              title: "Khuyến mãi",
              render: (value) => (
                <div>
                  <p className="font-semibold text-neutral-700">{value}</p>
                  <p className="text-neutral-700">10% OFF</p>
                </div>
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
              key: "method",
              dataIndex: "method",
              title: "Method",
            },
            {
              key: "type",
              dataIndex: "type",
              title: "Loại giảm giá",
            },
            {
              key: "used",
              dataIndex: "used",
              title: "Đã sử dụng",
            },
          ]}
        />
      </div>
    </div>
  );
}

export default ListingDiscount;
