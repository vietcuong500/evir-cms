import { Button } from "antd";
import React from "react";
import { FiEdit2 } from "react-icons/fi";

function CustomerInfo(props: any) {
  const {data} = props;
  return (
    <div className="box">
      <div className="box-title flex items-center justify-between">
        <p>Khách hàng</p>
        <Button size="small" type="text" icon={<FiEdit2 />}></Button>
      </div>
      <div className="px-5 py-3 flex flex-col gap-4">
        <div>
          <p className="text-neutral-800 mb-1 font-semibold">
            Thông tin khách hàng
          </p>
          <div>
            <p>{data?.username}</p>
            <p className="text-blue-500">{data?.email}</p>
            <p className="text-neutral-600">{data?.phone_number}</p>
          </div>
        </div>
        <div>
          <p className="text-neutral-800 font-semibold mb-1">
            Địa chỉ nhận hàng
          </p>
          <div>
            <p className="text-neutral-600">
              CT7A KDT Dương Nội, Hà Đông, Hà Nội
            </p>
          </div>
        </div>
        <div>
          <p className="text-neutral-800 font-semibold mb-1">Thống kê</p>
          <div>
            <div className="flex items-center justify-between">
                <span className="text-neutral-700">Tổng số đơn hàng</span>
                <span>3</span>
            </div>
            <div className="flex items-center justify-between">
                <span className="text-neutral-700">Đã thanh toán</span>
                <span>31.000.000 VND</span>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomerInfo;
