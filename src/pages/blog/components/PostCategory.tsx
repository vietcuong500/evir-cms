import { Select } from "antd";
import { useListingCategory } from "pages/category/hook";
import React, { useState } from "react";
import { Controller, useFormContext } from "react-hook-form";

function PostCategory() {
  const { control } = useFormContext();
  const [params, setParams] = useState({
    page: 1,
    page_size: 10,
    keyword: "",
  });
  const { data, isLoading } = useListingCategory(params);
  return (
    <div className="box">
      <p className="box-title">Danh mục</p>
      <div className="px-5 py-3">
        <Controller
          control={control}
          name="category_id"
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
                  ? data.data.map((el: any) => ({
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

export default PostCategory;
