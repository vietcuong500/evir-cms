import { Button } from "antd";
import React from "react";

function OrderPayment() {
  return (
    <div className="box">
      <p className="box-title">Thanh toán</p>
      <div className="px-5 py-3 text-neutral-800 flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <p>Đơn giá</p>
          <p className="">19.400.000</p>
        </div>
        <div className="flex items-center justify-between">
          <p className="w-1/6">Giảm giá</p>
          <p>0</p>
        </div>
        <div className="flex items-center justify-between">
          <p>Phí giao hàng</p>
          <p>0</p>
        </div>
        <div className="flex items-center justify-between font-semibold py-2 border-t border-neutral-200">
          <p>Thành tiền</p>
          <p>19.400.000</p>
        </div>
      </div>
    </div>
  );
}

export default OrderPayment;
