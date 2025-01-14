import { Button, Upload } from "antd";
import { cdnService } from "apis/cdn";
import FileUpload from "components/FileUpload/FileUpload";
import cdnConfig from "config/cdnConfig";
import React from "react";
import { Controller, useFormContext, useWatch } from "react-hook-form";
import { FiUpload } from "react-icons/fi";
import { useToggle } from "react-use";

function ProductThumbnail() {
  const { control, setValue } = useFormContext();
  const images = useWatch({
    control,
    name: "images",
  });
  return (
    <div className="box">
      <div className="box-title flex items-center justify-between">
        <p>Ảnh đại diện</p>
        <Controller
          control={control}
          name="images"
          render={({ field: { onChange } }) => (
            <label htmlFor="file" className="cursor-pointer">
              <input
                className="hidden"
                id="file"
                type="file"
                name="file"
                onChange={async (e) => {
                  const file: any = e.target.files;
                  const url = await cdnService.upload(file[0]);
                  onChange(url);
                }}
              />
              <FiUpload />
            </label>
          )}
        />
      </div>
      <div className="px-5 py-3 h-40">
        <div className="w-full h-full bg-neutral-200 border border-neutral-500 rounded overflow-hidden">
          <img className="w-full h-full object-cover" src={images} alt="" />
        </div>
      </div>
    </div>
  );
}

export default ProductThumbnail;
