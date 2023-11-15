import { Input, Popover } from "antd";
import { cdnService } from "apis/cdn";
import React from "react";
import { Controller, useFieldArray, useFormContext } from "react-hook-form";

function CustomerSay() {
  const { control, watch, register } = useFormContext();
  const { fields } = useFieldArray({
    control,
    name: "customer_say.images",
  });
  return (
    <Popover
      content={
        <div>
          <Controller
            name="customer_say.sub_title"
            control={control}
            render={({ field: { onChange, value } }) => (
              <Input
                onChange={onChange}
                value={value}
                placeholder="sub title"
              />
            )}
          />
          <Controller
            name="customer_say.title"
            control={control}
            render={({ field: { onChange, value } }) => (
              <Input onChange={onChange} value={value} placeholder="title" />
            )}
          />
          <Controller
            name="customer_say.desc"
            control={control}
            render={({ field: { onChange, value } }) => (
              <Input onChange={onChange} value={value} placeholder="title" />
            )}
          />

          <Controller
            name="customer_say.name"
            control={control}
            render={({ field: { onChange, value } }) => (
              <Input onChange={onChange} value={value} placeholder="title" />
            )}
          />
          <Controller
            name="customer_say.avatar"
            control={control}
            render={({ field: { onChange, value } }) => (
              <Input
                type="file"
                onChange={async (e) => {
                  const file: any = e.target.files;
                  const url = await cdnService.upload(file[0]);
                  onChange(url);
                }}
                placeholder="avatr"
              />
            )}
          />

          <Controller
            name="customer_say.status"
            control={control}
            render={({ field: { onChange, value } }) => (
              <Input onChange={onChange} value={value} placeholder="title" />
            )}
          />
          <div>
            {fields.map((el: any, id: number) => (
              <Controller
                key={el.id}
                control={control}
                name={`customer_say.images[${id}].link`}
                render={({ field: { onChange, value } }) => (
                  <div>
                    <Input
                      type="file"
                      onChange={async (e) => {
                        const file: any = e.target.files;
                        const url = await cdnService.upload(file[0]);
                        onChange(url);
                      }}
                    />
                  </div>
                )}
              />
            ))}
          </div>

          <Controller
            name="customer_say.social.name"
            control={control}
            render={({ field: { onChange, value } }) => (
              <Input onChange={onChange} value={value} placeholder="social" />
            )}
          />
          <Controller
            name="customer_say.social.account"
            control={control}
            render={({ field: { onChange, value } }) => (
              <Input onChange={onChange} value={value} placeholder="account" />
            )}
          />
          <Controller
            name="customer_say.social.desc"
            control={control}
            render={({ field: { onChange, value } }) => (
              <Input onChange={onChange} value={value} placeholder="desc" />
            )}
          />
        </div>
      }
    >
      <div className="container mx-auto grid grid-cols-1 xl:grid-cols-2 gap-8 my-8 ring-1 ring-transparent hover:ring-lime-500">
        <div className="mx-auto text-center">
          <p className="text-sm text-center font-medium text-green-600">
            {watch("customer_say.sub_title")}
          </p>
          <p className="text-xl relative uppercase text-neutral-800 font-medium text-center mb-8 mt-4">
            {watch("customer_say.title")}
            <span className="absolute block w-14 h-1 bg-green-700 left-[50%] -translate-x-[50%] mt-2"></span>
          </p>
          <div className="w-[100px] h-[100px] mx-auto rounded-full overflow-hidden bg-neutral-200 mb-3">
            {watch("customer_say.avatar") ? (
              <img
                src={watch("customer_say.avatar")}
                className="w-full h-full object-cover object-center"
              />
            ) : null}
          </div>
          <p className="text-sm text-neutral-900">
            {watch("customer_say.desc")}
          </p>
          <p className="text-sm mt-4">
            <span className="font-semibold"> {watch("customer_say.name")}</span>
            <span className="text-neutral-700">
              - {watch("customer_say.status")}
            </span>
          </p>
        </div>
        <div className="grid grid-cols-3 grid-rows-2 gap-4 relative">
          <div className="bg-neutral-100">
            <img
              className="w-full h-full object-cover object-center"
              src={watch("customer_say.images[0].link")}
            />
          </div>
          <div className="bg-neutral-100">
            <img
              className="w-full h-full object-cover object-center"
              src={watch("customer_say.images[1].link")}
            />
          </div>
          <div className="bg-neutral-100">
            <img
              className="w-full h-full object-cover object-center"
              src={watch("customer_say.images[2].link")}
            />
          </div>
          <div className="bg-neutral-100">
            <img
              className="w-full h-full object-cover object-center"
              src={watch("customer_say.images[3].link")}
            />
          </div>
          <div className="bg-neutral-100">
            <img
              className="w-full h-full object-cover object-center"
              src={watch("customer_say.images[4].link")}
            />
          </div>
          <div className="bg-neutral-100">
            <img
              className="w-full h-full object-cover object-center"
              src={watch("customer_say.images[5].link")}
            />
          </div>
          <div className="absolute w-[300px] text-center h-[220px] bg-white shadow left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] p-5 flex flex-col items-center justify-center">
            <p className="uppercase">{watch("customer_say.social.name")}</p>
            <p className="text-sm text-neutral-500 mt-1">
              {watch("customer_say.social.account")}
            </p>
            <p className="text-sm text-neutral-900 mt-3">
              {watch("customer_say.social.desc")}
            </p>
          </div>
        </div>
      </div>
    </Popover>
  );
}

export default CustomerSay;
