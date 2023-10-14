import { Input } from "antd";
import TextArea from "antd/es/input/TextArea";
import React from "react";

function CollectionInfo() {
  return (
    <div className="box">
      <p className="box-title">Thông tin cơ bản</p>
      <div className="p-5 flex flex-col gap-4">
        <div>
          <label className="mb-1 inline-block" htmlFor="name">
            Tên bộ sưu tập
          </label>
          <Input id="name" placeholder="Tên sản phẩm" />
        </div>
        <div>
          <label className="mb-1 inline-block" htmlFor="desc">
            Mô tả
          </label>
          <TextArea
            autoSize={{
              minRows: 3,
              maxRows: 5,
            }}
            id="desc"
            placeholder="Tên sản phẩm"
          />
        </div>
      </div>
    </div>
  );
}

export default CollectionInfo;
