import { Select } from "antd";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";

function ProductStatus() {
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
              showSearch
              value={value}
              onChange={onChange}
              placeholder="Chọn trạng thái"
              optionFilterProp="children"
              options={[
                {
                  value: "ACTIVE",
                  label: "Xuất bản",
                },
                {
                  value: "INACTIVE",
                  label: "Bản nháp",
                },
              ]}
            />
          )}
        />
      </div>
    </div>
  );
}

export default ProductStatus;
