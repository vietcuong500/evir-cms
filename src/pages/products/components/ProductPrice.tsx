import { Checkbox, Input } from "antd";
import React from "react";

function ProductPrice() {
  return (
    <div className="box">
      <p className="box-title">Giá sản phẩm</p>
      <div className="p-5 flex flex-col gap-y-4">
        <div className="grid grid-cols-3 gap-4">
          <div>
            <label className="mb-1 inline-block" htmlFor="price-regular">
              Giá thường
            </label>
            <Input id="price-regular" placeholder="Tên sản phẩm" />
          </div>
          <div>
            <label className="mb-1 inline-block" htmlFor="price-regular">
              Giá bán
            </label>
            <Input id="price-regular" placeholder="Tên sản phẩm" />
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Checkbox id="inventory" />
          <label htmlFor="inventory">Tính thuế sản phẩm</label>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div>
            <label className="mb-1 inline-block" htmlFor="price-regular">
              Giá nhập
            </label>
            <Input id="price-regular" placeholder="Tên sản phẩm" />
          </div>
          <div>
            <label className="mb-1 inline-block" htmlFor="price-regular">
              Lãi
            </label>
            <Input
              readOnly
              bordered={false}
              style={{
                backgroundColor: "#d2d2d2",
              }}
              id="price-regular"
              placeholder="Tên sản phẩm"
            />
          </div>
          <div>
            <label className="mb-1 inline-block" htmlFor="price-regular">
              Tỷ lệ
            </label>
            <Input
              bordered={false}
              style={{
                backgroundColor: "#d2d2d2",
              }}
              type=""
              readOnly
              id="price-regular"
              placeholder="Tên sản phẩm"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPrice;
