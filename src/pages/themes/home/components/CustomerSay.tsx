import { Input, Popover } from "antd";
import { cdnService } from "apis/cdn";
import React from "react";
import { Controller, useFieldArray, useFormContext } from "react-hook-form";

function CustomerSay(props: any) {
  const { control, watch, register } = useFormContext();
  const {lang} = props;
  const suffix = `${lang}.customer_say`
  const { fields } = useFieldArray({
    control,
    name: "${suffix}.images",
  });
  return (
    <Popover
      content={
        <div>
          <Controller
            name={`${suffix}.sub_title`}
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
            name={`${suffix}.title`}
            control={control}
            render={({ field: { onChange, value } }) => (
              <Input onChange={onChange} value={value} placeholder="title" />
            )}
          />
          <Controller
            name={`${suffix}.desc`}
            control={control}
            render={({ field: { onChange, value } }) => (
              <Input onChange={onChange} value={value} placeholder="title" />
            )}
          />

          <Controller
            name={`${suffix}.name`}
            control={control}
            render={({ field: { onChange, value } }) => (
              <Input onChange={onChange} value={value} placeholder="title" />
            )}
          />
          <Controller
            name={`${suffix}.avatar`}
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
            name={`${suffix}.status`}
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
                name={`${suffix}.images[${id}].link`}
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
            name={`${suffix}.social.name`}
            control={control}
            render={({ field: { onChange, value } }) => (
              <Input onChange={onChange} value={value} placeholder="social" />
            )}
          />
          <Controller
            name={`${suffix}.social.account`}
            control={control}
            render={({ field: { onChange, value } }) => (
              <Input onChange={onChange} value={value} placeholder="account" />
            )}
          />
          <Controller
            name={`${suffix}.social.desc`}
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
            {watch(`${suffix}.sub_title`)}
          </p>
          <p className="text-xl relative uppercase text-neutral-800 font-medium text-center mb-8 mt-4">
            {watch(`${suffix}.title`)}
            <span className="absolute block w-14 h-1 bg-green-700 left-[50%] -translate-x-[50%] mt-2"></span>
          </p>
          <div className="w-[100px] h-[100px] mx-auto rounded-full overflow-hidden bg-neutral-200 mb-3">
            {watch(`${suffix}.avatar`) ? (
              <img
                src={watch(`${suffix}.avatar`)}
                className="w-full h-full object-cover object-center"
              />
            ) : null}
          </div>
          <p className="text-sm text-neutral-900">
            {watch(`${suffix}.desc`)}
          </p>
          <p className="text-sm mt-4">
            <span className="font-semibold"> {watch("${suffix}.name")}</span>
            <span className="text-neutral-700">
              - {watch(`${suffix}.status`)}
            </span>
          </p>
        </div>
        <div className="grid grid-cols-3 grid-rows-2 gap-4 relative">
          <div className="bg-neutral-100">
            <img
              className="w-full h-full object-cover object-center"
              src={watch(`${suffix}.images[0].link`)}
            />
          </div>
          <div className="bg-neutral-100">
            <img
              className="w-full h-full object-cover object-center"
              src={watch(`${suffix}.images[1].link`)}
            />
          </div>
          <div className="bg-neutral-100">
            <img
              className="w-full h-full object-cover object-center"
              src={watch(`${suffix}.images[2].link`)}
            />
          </div>
          <div className="bg-neutral-100">
            <img
              className="w-full h-full object-cover object-center"
              src={watch(`${suffix}.images[3].link`)}
            />
          </div>
          <div className="bg-neutral-100">
            <img
              className="w-full h-full object-cover object-center"
              src={watch(`${suffix}.images[4].link`)}
            />
          </div>
          <div className="bg-neutral-100">
            <img
              className="w-full h-full object-cover object-center"
              src={watch(`${suffix}.images[5].link`)}
            />
          </div>
          <div className="absolute w-[300px] text-center h-[220px] bg-white shadow left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] p-5 flex flex-col items-center justify-center">
            <p className="uppercase">{watch("${suffix}.social.name")}</p>
            <p className="text-sm text-neutral-500 mt-1">
              {watch(`${suffix}.social.account`)}
            </p>
            <p className="text-sm text-neutral-900 mt-3">
              {watch(`${suffix}.social.desc`)}
            </p>
          </div>
        </div>
      </div>
    </Popover>
  );
}

export default CustomerSay;
