import { Input, DatePicker } from "antd";

import React from "react";

const { RangePicker } = DatePicker;

function DiscountInfo() {
  return (
    <div className="box">
      <p className="box-title">Thông tin cơ bản</p>
      <div className="px-5 py-3 flex flex-col gap-2">
        <div>
          <label className="mb-1 inline-block" htmlFor="name">
            Tên chiến dịch
          </label>
          <Input id="name" placeholder="Tên chiến dịch" />
        </div>
        <div>
          <label className="mb-1 block">Thời gian bắt đầu</label>
          <RangePicker
            showTime
            style={{
              width: "100%",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default DiscountInfo;
