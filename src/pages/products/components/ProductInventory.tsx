import { Checkbox, Input, Select } from "antd";
import React from "react";

function ProductInventory() {
  return (
    <div className="box">
      <p className="box-title">Hàng tồn kho</p>
      <div className="p-5 flex flex-col gap-4">
        <div>
          <label className="mb-1 inline-block" htmlFor="sku">
            SKU
          </label>
          <Input id="sku" placeholder="SKU" />
        </div>
        <div>
          <label className="block mb-1" htmlFor="">
            Trạng thái
          </label>
          <Select
            style={{ width: "100%" }}
            showSearch
            placeholder="Chọn trạng thái"
            optionFilterProp="children"
            options={[
              {
                value: "jack",
                label: "Còn hàng",
              },
              {
                value: "lucy",
                label: "Hết hàng",
              },
            ]}
          />
        </div>
        <div className="flex items-center gap-4">
          <Checkbox id="inventory" />
          <label htmlFor="inventory">Quản lý tồn kho</label>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="mb-1 inline-block" htmlFor="quantity">
              Số lượng sản phẩm
            </label>
            <Input id="quantity" placeholder="Số lượng sản phẩm tồn kho" />
          </div>
          <div>
            <label className="mb-1 inline-block" htmlFor="quantity">
              Hiện có
            </label>
            <Input id="quantity" placeholder="Số lượng sản phẩm hiện có" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductInventory;
