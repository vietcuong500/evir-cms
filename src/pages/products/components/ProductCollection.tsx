import { Select } from "antd";
import { useListingCollection } from "hooks/collection";
import { useState } from "react";
import { Controller, useFormContext } from "react-hook-form";

function ProductCollection() {
  const { control } = useFormContext();
  const [params, setParams] = useState({
    page: 1,
    page_size: 10,
    keyword: "",
  });
  const { isLoading, data } = useListingCollection(params);
  return (
    <div className="box">
      <p className="box-title">Danh mục</p>
      <div className="py-3 px-3">
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
        {/* <Tree
          checkable
          treeData={[
            {
              title: "Quần Nam",
              key: 1,
              children: [
                {
                  title: "Quần vải",
                  key: 2,
                },
                {
                  title: "Quần kaki",
                  key: 3,
                },
                {
                  title: "Quần thun",
                  key: 4,
                },
              ],
            },
            {
              title: "Áo Nam",
              key: 5,
              children: [
                {
                  title: "Áo sơ mi",
                  key: 6,
                },
                {
                  title: "Áo tanktop",
                  key: 7,
                },
                {
                  title: "Áo thun",
                  key: 8,
                },
              ],
            },
          ]}
        />
        <Button className="mt-3" type="link">
          Thêm danh mục
        </Button> */}
      </div>
    </div>
  );
}

export default ProductCollection;
