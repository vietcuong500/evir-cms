import { Button } from "antd";
import React from "react";
import { DiscountInfo, DiscountMasterSetting } from "./components";

function DiscountMaster() {
  return (
    <div className="w-9/12 mx-auto">
      <div className="grid grid-cols-12  gap-x-8">
        <div className="col-span-8 flex flex-col gap-4">
          <DiscountInfo />
          <DiscountMasterSetting />
        </div>
        <div className="col-span-4 flex flex-col gap-4"></div>
      </div>
      <div className="flex items-center justify-end gap-4 mt-8">
        <Button>Hủy</Button>
        <Button type="primary">Hoàn thành</Button>
      </div>
    </div>
  );
}

export default DiscountMaster;
