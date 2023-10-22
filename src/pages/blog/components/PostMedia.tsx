import { Button, Upload } from "antd";
import cdnConfig from "config/cdnConfig";
import React from "react";
import { Controller, useFormContext, useWatch } from "react-hook-form";
import { FiUpload } from "react-icons/fi";
import { useToggle } from "react-use";

function PostMedia() {
  const { control } = useFormContext();
  const avatar = useWatch({
    control,
    name: "avatar",
  });
  return (
    <div className="box">
      <div className="box-title flex items-center justify-between">
        <p>Media</p>
        <Controller
          control={control}
          name="avatar"
          render={({ field: { onChange } }) => (
            <label htmlFor="file" className="cursor-pointer">
              <input
                className="hidden"
                id="file"
                type="file"
                name="file"
                onChange={async (e) => {
                  const formData = new FormData();
                  const file: any = e.target.files;
                  if (file[0]) {
                    formData.append("file", file[0]);

                    const res = await cdnConfig
                      .post("uploadFile", formData)
                      .then((res) => res.data);
                    if (res) {
                      onChange(res.fileDownloadUri);
                    }
                  }
                }}
              />
              <FiUpload />
            </label>
          )}
        />
      </div>
      <div className="px-5 py-3 h-40">
        <div className="w-full h-full bg-neutral-200 border border-neutral-500 rounded overflow-hidden">
          <img className="w-full h-full object-cover" src={avatar} alt="" />
        </div>
      </div>
    </div>
  );
}

export default PostMedia;
