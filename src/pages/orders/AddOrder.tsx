import { Button } from "antd";
import React from "react";
import OrderCustomer from "./components/OrderCustomer";
import OrderNote from "./components/OrderNote";
import OrderPayment from "./components/OrderPayment";
import OrderProducts from "./components/OrderProducts";

function AddOrder() {
  return (
    <div className="w-9/12 mx-auto">
      <div className="grid grid-cols-12  gap-x-8">
        <div className="col-span-8 flex flex-col gap-4">
          <OrderProducts />
          <OrderPayment />
        </div>
        <div className="col-span-4 flex flex-col gap-4">
          <OrderNote />
          <OrderCustomer />
        </div>
      </div>
      <div className="flex items-center justify-end gap-4 mt-8">
        <Button>Hủy</Button>
        <Button type="primary">Hoàn thành</Button>
      </div>
    </div>
  );
}

export default AddOrder;
