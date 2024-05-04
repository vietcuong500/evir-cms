import React, { useState } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CollectionCard from "./CollectionCard";
import {
  Controller,
  useFieldArray,
  useFormContext,
  useWatch,
} from "react-hook-form";
import { useToggle } from "react-use";
import { Button, Drawer, Input } from "antd";
import { cdnService } from "apis/cdn";
import CategoryResource from "components/ProductResource/CategoryResource";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

function CollectionSection(props: any) {
  const { lang, data, isLoading } = props;
  const { control, watch, setValue, getValues } = useFormContext();
  const [open, setOpen] = useToggle(false);
  const suffix = `${lang}.collection`;

  const { fields, update } = useFieldArray({
    control,
    name: `${suffix}.items`,
  });
  const [openColl, setOpenColl] = useToggle(false);
  const [itemSelected, setItemSelect] = useState(-1);
  const items = useWatch({
    control,
    name: `${suffix}.items`,
  });
  return (
    <>
      <CategoryResource
        data={data}
        isLoading={isLoading}
        onClick={(value: any) => {
          const { id, name, num_of_products } = value;
          const image = getValues(`${suffix}.items[${id}].image`);
          update(itemSelected, {
            image,
            id,
            title: name,
            count: num_of_products,
          });
        }}
        open={openColl}
        toggle={setOpenColl}
      />
      <div onClick={setOpen} className="container mx-auto">
        <div>
          <p className="text-sm text-center font-medium text-green-600">
            {watch(`${suffix}.sub_title`)}
          </p>
          <p className="text-xl uppercase text-neutral-800 font-medium text-center my-3">
            {watch(`${suffix}.title`)}
          </p>
          <p className="text-sm text-neutral-800 text-center font-light">
            {watch(`${suffix}.desc`)}{" "}
          </p>
        </div>
        <Slider {...settings} className="mt-6">
          {items.map((el: any, id: number) => (
            <CollectionCard
              key={id}
              image={el.image}
              count={el.count}
              title={el.title}
            />
          ))}
        </Slider>
      </div>
      <Drawer
        open={open}
        onClose={setOpen}
        placement="right"
        title="Collection"
      >
        <div className="flex flex-col gap-3">
          <Controller
            control={control}
            name={`${suffix}.sub_title`}
            render={({ field: { onChange, value } }) => (
              <Input value={value} onChange={onChange} />
            )}
          />
          <Controller
            control={control}
            name={`${suffix}.title`}
            render={({ field: { onChange, value } }) => (
              <Input value={value} onChange={onChange} />
            )}
          />
          <Controller
            control={control}
            name={`${suffix}.desc`}
            render={({ field: { onChange, value } }) => (
              <Input value={value} onChange={onChange} />
            )}
          />
          <div className="flex flex-col gap-4">
            {fields.map((el: any, id: number) => (
              <div key={el.id} className="flex flex-col gap-4">
                <div className="flex flex-col gap-3">
                  <div className="grid-cols-2 grid gap-4">
                    <div className="flex items-center justify-center">
                      <p>{el?.title || "Chưa chọn danh mục"}</p>
                    </div>
                    <Button
                      type="text"
                      onClick={() => {
                        setItemSelect(id);
                        setOpenColl();
                      }}
                    >
                      Chọn danh mục
                    </Button>
                  </div>
                  <Controller
                    control={control}
                    name={`${suffix}.items[${id}].image`}
                    render={({ field: { onChange, value } }) => (
                      <Input
                        type="file"
                        onChange={async (e) => {
                          const file: any = e.target.files;
                          const url = await cdnService.upload(file[0]);
                          onChange(url);
                        }}
                      />
                    )}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </Drawer>
    </>
  );
}

export default CollectionSection;
