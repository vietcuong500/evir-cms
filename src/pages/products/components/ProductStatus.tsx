import { Select } from "antd";
import React from "react";

function ProductStatus() {
  return (
    <div className="box">
      <p className="box-title">Trạng thái</p>
      <div className="px-5 py-3">
        <Select
          style={{ width: "100%" }}
          showSearch
          placeholder="Chọn trạng thái"
          optionFilterProp="children"
          options={[
            {
              value: "jack",
              label: "Xuất bản",
            },
            {
              value: "lucy",
              label: "Bản nháp",
            },
          ]}
        />
      </div>
    </div>
  );
}

export default ProductStatus;
