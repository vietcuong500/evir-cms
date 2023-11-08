import { Button, Upload } from "antd";
import FileUpload from "components/FileUpload/FileUpload";
import cdnConfig from "config/cdnConfig";
import React from "react";
import { Controller, useFormContext, useWatch } from "react-hook-form";
import { FiUpload } from "react-icons/fi";
import { useToggle } from "react-use";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  initialSlide: 0,
};

function ProductMedia() {
  const [open, setOpen] = useToggle(false);
  const { control, setValue } = useFormContext();
  const lst_image = useWatch({
    control,
    name: "lst_image",
  });
  return (
    <div className="box">
      <FileUpload
        onChange={(value: string) => {
          setValue("lst_image", [...lst_image, value]);
        }}
        onDelete={(temp: string[]) => {
          setValue(
            "lst_image",
            lst_image.filter((el: any) => !temp.includes(el))
          );
        }}
        files={lst_image || []}
        open={open}
        toggle={setOpen}
      />
      <div className="box-title flex items-center justify-between">
        <p>Media</p>
        <Button
          type="text"
          icon={<FiUpload className="text-xl" />}
          onClick={setOpen}
        />
      </div>
      <div className="px-5 py-3 h-40">
        <Slider className="w-full h-full bg-neutral-100 border border-neutral-100 rounded overflow-hidden">
          {lst_image?.map((el: any, id: number) => (
            <img
              key={id}
              className="w-full h-full object-cover"
              src={el}
              alt=""
            />
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default ProductMedia;
