import { Input } from "antd";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";

function CategoryInfo() {
  const { control } = useFormContext();
  return (
    <div className="box">
      <p className="box-title">Thông tin cơ bản</p>
      <div className="p-5 flex flex-col gap-4">
        <Controller
          control={control}
          name="name"
          render={({ field: { onChange, value } }) => (
            <div>
              <label className="mb-1 inline-block" htmlFor="name">
                Tên danh mục
              </label>
              <Input
                value={value}
                onChange={onChange}
                id="name"
                placeholder=""
              />
            </div>
          )}
        />
      </div>
    </div>
  );
}

export default CategoryInfo;
