import { Button } from "antd";
import React from "react";
import { formatCurrency } from "utlis/common";

function OrderPayment(props: any) {
  const { total, subTotal, discount } = props;
  return (
    <div className="box">
      <p className="box-title">Thanh toán</p>
      <div className="px-5 py-3 text-neutral-800 flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <p>Đơn giá</p>
          <p className="">{formatCurrency(total)} vnd</p>
        </div>
        <div className="flex items-center justify-between">
          <p className="w-1/6">Giảm giá</p>
          <p>{formatCurrency(discount)} vnd</p>
        </div>
        <div className="flex items-center justify-between">
          <p>Phí giao hàng</p>
          <p>0</p>
        </div>
        <div className="flex items-center justify-between font-semibold py-2 border-t border-neutral-200">
          <p>Thành tiền</p>
          <p>{formatCurrency(subTotal)} vnd</p>
        </div>
      </div>
    </div>
  );
}

export default OrderPayment;
