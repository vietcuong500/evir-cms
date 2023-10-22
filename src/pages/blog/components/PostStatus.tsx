import { Select } from "antd";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";

function PostStatus() {
  const { control } = useFormContext();
  return (
    <div className="box">
      <p className="box-title">Trạng thái</p>
      <div className="px-5 py-3">
        <Controller
          control={control}
          name="status"
          render={({ field: { onChange, value } }) => (
            <Select
              style={{ width: "100%" }}
              value={value}
              onChange={onChange}
              showSearch
              placeholder="Chọn trạng thái"
              optionFilterProp="children"
              options={[
                {
                  value: "DRAFT",
                  label: "Bản nháp",
                },
                {
                  value: "ACTIVE",
                  label: "Xuất bản",
                },
              ]}
            />
          )}
        />
      </div>
    </div>
  );
}

export default PostStatus;
