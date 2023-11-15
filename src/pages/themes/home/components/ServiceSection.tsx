import { Input, Popover } from "antd";
import TextArea from "antd/es/input/TextArea";
import { cdnService } from "apis/cdn";
import React from "react";
import { Controller, useFieldArray, useFormContext } from "react-hook-form";
import ServiceCard from "./ServiceCard";

const ServiceTop = () => {
  const { control, watch } = useFormContext();

  return (
    <Popover
      content={
        <div>
          <Controller
            control={control}
            name="service.sub_title"
            render={({ field: { onChange, value } }) => (
              <Input
                value={value}
                onChange={onChange}
                placeholder="sub title"
              />
            )}
          />
          <Controller
            control={control}
            name="service.title"
            render={({ field: { onChange, value } }) => (
              <Input
                value={value}
                onChange={onChange}
                placeholder="sub title"
              />
            )}
          />
          <Controller
            control={control}
            name="service.desc"
            render={({ field: { onChange, value } }) => (
              <TextArea
                value={value}
                onChange={onChange}
                autoSize={{
                  minRows: 2,
                  maxRows: 3,
                }}
                placeholder="sub title"
              />
            )}
          />
        </div>
      }
    >
      <div className="ring-1 ring-transparent hover:ring-lime-500">
        <p className="text-sm text-center font-medium text-green-600">
          {watch("service.sub_title")}
        </p>
        <p className="text-xl uppercase text-neutral-800 font-medium text-center my-3">
          {watch("service.title")}
        </p>
        <p className="text-sm text-neutral-800 text-center font-light">
          {watch("service.desc")}
        </p>
      </div>
    </Popover>
  );
};

const ServiceItems = () => {
  const { control, watch } = useFormContext();
  const { fields } = useFieldArray({
    control,
    name: "service.items",
  });
  return (
    <div className="mt-24 relative grid grid-cols-2 xl:grid-cols-4 gap-8">
      {fields.map((el: any, id: number) => (
        <div key={el.id}>
          <Popover
            key={el.id}
            trigger="click"
            placement="bottom"
            content={
              <div className="w-80 px-5 py-3 flex flex-col gap-4">
                <Controller
                  control={control}
                  name={`service.items[${id}].icon`}
                  render={({ field: { onChange, value } }) => (
                    <Input
                      type="file"
                      placeholder="Link icon"
                      onChange={async (e) => {
                        const file: any = e.target.files;
                        const url = await cdnService.upload(file[0]);
                        onChange(url);
                      }}
                    />
                  )}
                />
                <Controller
                  control={control}
                  name={`service.items[${id}].title`}
                  render={({ field: { onChange, value } }) => (
                    <Input
                      value={value}
                      onChange={onChange}
                      placeholder="Title"
                    />
                  )}
                />
                <Controller
                  control={control}
                  name={`service.items[${id}].desc`}
                  render={({ field: { onChange, value } }) => (
                    <Input
                      value={value}
                      onChange={onChange}
                      placeholder="desc"
                    />
                  )}
                />
                <Controller
                  control={control}
                  name={`service.items[${id}].action`}
                  render={({ field: { onChange, value } }) => (
                    <Input
                      value={value}
                      onChange={onChange}
                      placeholder="action"
                    />
                  )}
                />
              </div>
            }
          >
            <div className="relative hover:shadow-md ring-1 ring-transparent hover:ring-lime-500">
              <div className="mx-auto w-[100px] h-[100px] rounded-full bg-neutral-100 p-5 absolute left-[50%] -translate-x-[50%] -top-[50px]">
                {watch(`service.items[${id}].icon`) ? (
                  <img
                    src={watch(`service.items[${id}].icon`)}
                    className="w-full h-full object-cover object-center"
                  />
                ) : null}
              </div>
              <div className="text-center p-5 pt-16 pb-8 border border-neutral-200">
                <p className="text-lg mb-2">
                  {watch(`service.items[${id}].title`)}
                </p>
                <p className="text-sm text-neutral-800">
                  {watch(`service.items[${id}].desc`)}
                </p>
              </div>
              <button className="mx-auto -mt-[18px] h-9 w-36 bg-green-600 rounded text-white uppercase">
                read more
              </button>
            </div>
          </Popover>
        </div>
      ))}
    </div>
  );
};

function ServiceSection() {
  const { control, watch } = useFormContext();

  return (
    <div className="container mx-auto">
      <ServiceTop />
      <ServiceItems />
    </div>
  );
}

export default ServiceSection;
