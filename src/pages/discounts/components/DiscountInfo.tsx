import { Input, DatePicker } from "antd";
import moment from "moment";
import dayjs from "dayjs";
import React from "react";
import { Controller, useFormContext, useWatch } from "react-hook-form";

const { RangePicker } = DatePicker;

function DiscountInfo() {
  const { control, setValue } = useFormContext();
  const start_date = useWatch({
    control,
    name: "start_date",
  });
  const end_date = useWatch({
    control,
    name: "end_date",
  });
  return (
    <div className="box">
      <p className="box-title">Thông tin cơ bản</p>
      <div className="px-5 py-3 flex flex-col gap-2">
        <Controller
          control={control}
          name="name"
          render={({ field: { onChange, value } }) => (
            <div>
              <label className="mb-1 inline-block" htmlFor="name">
                Tên chiến dịch
              </label>
              <Input
                value={value}
                onChange={onChange}
                id="name"
                placeholder="Tên chiến dịch"
              />
            </div>
          )}
        />
        <div>
          <label className="mb-1 block">Thời gian bắt đầu</label>
          <RangePicker
            value={[
              dayjs(start_date, "YYYY/MM/DD HH:mm:ss"),
              dayjs(end_date, "YYYY/MM/DD HH:mm:ss"),
            ]}
            showTime
            style={{
              width: "100%",
            }}
            onCalendarChange={(value) => {
              setValue("start_date", value?.at(0));
              setValue("end_date", value?.at(1));
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default DiscountInfo;
