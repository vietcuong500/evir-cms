import { Spin } from "antd";
import React from "react";
import { useParams } from "react-router-dom";
import OrderCustomer from "../components/OrderCustomer";
import OrderNote from "../components/OrderNote";
import OrderPayment from "../components/OrderPayment";
import OrderProducts from "../components/OrderProducts";
import OrderSummary from "../components/OrderSummary";
import { useDetailOrder } from "../hook";

function OrderDetail() {
  const { id } = useParams();
  const { isLoading, data } = useDetailOrder(id);
  if (isLoading) return <Spin />;
  console.log(data);
  if (data)
    return (
      <div className="w-9/12 mx-auto">
        <div className="grid grid-cols-12  gap-x-8">
          <div className="col-span-8 flex flex-col gap-4">
            <OrderProducts orderDetails={data.data.order_details} />
            <OrderPayment
              total={data.data.amount}
              discount={data.data.discount}
              subTotal={data.data.total}
            />
          </div>
          <div className="col-span-4 flex flex-col gap-4">
            <OrderSummary
              date={data.data.order_date}
              paymentStatus={data.data.payment_status}
              paymentType={data.data.payment_type}
              status={data.data.status}
            />
            <OrderNote note={data.data.note} />
            <OrderCustomer
              name=""
              email={data.data.email}
              phone={data.data.phone}
              address={data.data.address}
            />
          </div>
        </div>
      </div>
    );
  return null;
}

export default OrderDetail;
