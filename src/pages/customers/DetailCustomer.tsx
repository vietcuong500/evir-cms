import { Button } from "antd";
import React from "react";
import { redirect, useLocation, useParams } from "react-router-dom";
import { CustomerInfo, CustomerNote, PurchaseHistory } from "./components";

function DetailCustomer() {
  const {id} = useParams();
  const {state} = useLocation()
  const {item} = state;
  if(!item) return null;
  return (
    <div className="w-9/12 mx-auto">
      <div className="grid grid-cols-12  gap-x-8">
        <div className="col-span-8 flex flex-col gap-4">
          <PurchaseHistory data={item} />
        </div>
        <div className="col-span-4 flex flex-col gap-4">
          <CustomerInfo  data={item}/>
          <CustomerNote data={item} />
        </div>
      </div>
      <div className="flex items-center justify-end gap-4 mt-8">
        <Button>Hủy</Button>
        <Button type="primary">Hoàn thành</Button>
      </div>
    </div>
  );
}

export default DetailCustomer;
