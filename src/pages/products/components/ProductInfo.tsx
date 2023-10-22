import { Input } from "antd";
import TextArea from "antd/es/input/TextArea";
import React from "react";
import { Editor } from "@tinymce/tinymce-react";
import { Controller, useFormContext } from "react-hook-form";
import { EditorTiny } from "components";

function ProductInfo() {
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
                Tên sản phẩm
              </label>
              <Input
                id="name"
                value={value}
                onChange={onChange}
                placeholder="Tên sản phẩm"
              />
            </div>
          )}
        />
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
        <div>
          <Controller
            control={control}
            name="description"
            render={({ field: { onChange, value } }) => (
              <EditorTiny value={value} onChange={onChange} />
            )}
          />
        </div>
      </div>
    </div>
  );
}

export default ProductInfo;
