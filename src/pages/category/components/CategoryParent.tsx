import { Select } from "antd";
import React, { useState } from "react";
import { Controller, useFormContext, useWatch } from "react-hook-form";
import { useListingCategory } from "../hook";

function CategoryParent() {
  const { control } = useFormContext();
  const id = useWatch({
    control,
    name: "id",
  });
  const [params, setParams] = useState({
    page: 1,
    page_size: 10,
    keyword: "",
  });
  const { data, isLoading } = useListingCategory(params);

  return (
    <div className="box">
      <div className="box-title">Danh mục cha</div>
      <div className="p-5 flex flex-col gap-4">
        <Controller
          control={control}
          name="parent_id"
          render={({ field: { onChange, value } }) => (
            <Select
              value={value}
              onChange={onChange}
              loading={isLoading}
              style={{ width: "100%" }}
              showSearch
              placeholder="Chọn danh mục"
              optionFilterProp="children"
              options={
                data
                  ? data.data
                      .filter((el: any) => el.id !== id)
                      .map((el: any) => ({
                        label: el.name,
                        value: el.id,
                      }))
                  : []
              }
            />
          )}
        />
      </div>
    </div>
  );
}

export default CategoryParent;
