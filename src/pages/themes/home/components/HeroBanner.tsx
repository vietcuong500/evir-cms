import { Drawer, Input, Popover } from "antd";
import { cdnService } from "apis/cdn";
import Label from "components/Label/Label";
import cdnConfig from "config/cdnConfig";
import React from "react";
import { Controller, useForm, useFormContext } from "react-hook-form";
import { FiPlus } from "react-icons/fi";
import { useToggle } from "react-use";
import { useThemes } from "../modules/HomePage";

const Hero1 = (props: any) => {
  const {lang} = props;
  const { control, watch } = useFormContext();
  const [open, setOpen] = useToggle(false);
  const suffix = `${lang}.hero[0]`

  return (
    <>
      <div
        onClick={setOpen}
        className="grow w-full lg:w-1/2 h-[26rem] cursor-pointer hover:shadow-xl relative"
      >
        <div className="absolute w-full h-full left-0 top-0 bg-slate-300">
          <img
            className="w-full h-full object-cover object-center"
            src={watch(`${suffix}.image`)}
            alt=""
          />
        </div>
        <div className="absolute w-full h-full left-0 top-0 z-10 p-8">
          <p className="mb-6 uppercase text-green-600 text-sm">
            {watch(`${suffix}.sub_title`)}
          </p>
          <h3 className="text-4xl font-semibold text-neutral-700 capitalize w-1/4">
            {watch(`${suffix}.title`)}
          </h3>
          <a
            className="uppercase hover:text-neutral-900 border-b border-green-500 text-sm text-neutral-800 font-medium mt-4 inline-block"
            href={watch(`${suffix}.link`)}
          >
            read more
          </a>
        </div>
      </div>
      <Drawer
        open={open}
        title="Hero Banner"
        onClose={setOpen}
        placement="right"
      >
        <div className="flex flex-col gap-4">
          <Controller
            control={control}
            name={`${suffix}.sub_title`}
            render={({ field: { onChange, value } }) => (
              <div>
                <Label label="Subtitle" />
                <Input
                  value={value}
                  onChange={onChange}
                  placeholder="Subtitle"
                />
              </div>
            )}
          />
          <Controller
            control={control}
            name={`${suffix}.title`}
            render={({ field: { onChange, value } }) => (
              <div>
                <Label label="Title" />
                <Input value={value} onChange={onChange} placeholder="Title" />
              </div>
            )}
          />
          <Controller
            control={control}
            name={`${suffix}.link`}
            render={({ field: { onChange, value } }) => (
              <div>
                <Label label="Link" />
                <Input value={value} onChange={onChange} placeholder="Link" />
              </div>
            )}
          />

          <Controller
            control={control}
            name={`${suffix}.image`}
            render={({ field: { onChange, value } }) => (
              <input
                type="file"
                name=""
                id={`${suffix}.image`}
                onChange={async (e) => {
                  const file: any = e.target.files;
                  const url = await cdnService.upload(file[0]);
                  onChange(url);
                }}
              />
            )}
          />
        </div>
      </Drawer>
    </>
  );
};

const Hero2 = (props: any) => {
  const { control, watch } = useFormContext();
  const {lang} = props;
  const [open, setOpen] = useToggle(false);
  const suffix = `${lang}.hero[1]`

  return (
    <>
      <div
        onClick={setOpen}
        className="h-1/2 w-full relative bg-neutral-300 p-5"
      >
        <div className="absolute w-full h-full left-0 top-0">
          <img
            className="w-full h-full object-cover object-center"
            src={watch(`${suffix}.image`)}
          />
        </div>
        <div className="w-full h-full absolute z-10 p-5 left-0 top-0">
          <p className="mb-4 uppercase text-green-600 text-sm">
            {watch(`${suffix}.sub_title`)}
          </p>
          <h3 className="text-2xl font-semibold text-neutral-700 capitalize w-1/3">
            {watch(`${suffix}.title`)}
          </h3>
          <a
            className="uppercase hover:text-neutral-900 border-b border-green-500 text-xs text-neutral-800 font-medium mt-2 inline-block"
            href="/news/mattis-laoreet-sapien"
          >
            read more
          </a>
        </div>
      </div>
      <Drawer
        onClose={setOpen}
        open={open}
        placement="right"
        title="Hero banner"
      >
        <div className="flex flex-col gap-4 w-72">
          <Controller
            control={control}
            name={`${suffix}.sub_title`}
            render={({ field: { onChange, value } }) => (
              <div>
                <Label label="Subtitle" />
                <Input
                  value={value}
                  onChange={onChange}
                  placeholder="Subtitle"
                />
              </div>
            )}
          />
          <Controller
            control={control}
            name={`${suffix}.title`}
            render={({ field: { onChange, value } }) => (
              <div>
                <Label label="Title" />
                <Input value={value} onChange={onChange} placeholder="Title" />
              </div>
            )}
          />
          <Controller
            control={control}
            name={`${suffix}.link`}
            render={({ field: { onChange, value } }) => (
              <div>
                <Label label="Link" />
                <Input value={value} onChange={onChange} placeholder="Link" />
              </div>
            )}
          />

          <Controller
            control={control}
            name={`${suffix}.image`}
            render={({ field: { onChange, value } }) => (
              <input
                type="file"
                name=""
                id={`${suffix}.image`}
                onChange={async (e) => {
                  const file: any = e.target.files;
                  const url = await cdnService.upload(file[0]);
                  onChange(url);
                }}
              />
            )}
          />
        </div>
      </Drawer>
    </>
  );
};

const Hero3 = (props: any) => {
  const { watch, control } = useFormContext();
  const {lang} = props;
  const suffix = `${lang}.hero[2]`

  return (
    <Popover
      content={
        <div className="p-5 flex flex-col gap-4 w-72">
          <Controller
            control={control}
            name={`${suffix}.sub_title`}
            render={({ field: { onChange, value } }) => (
              <div>
                <Label label="Subtitle" />
                <Input
                  value={value}
                  onChange={onChange}
                  placeholder="Subtitle"
                />
              </div>
            )}
          />
          <Controller
            control={control}
            name={`${suffix}.title`}
            render={({ field: { onChange, value } }) => (
              <div>
                <Label label="Title" />
                <Input value={value} onChange={onChange} placeholder="Title" />
              </div>
            )}
          />
          <Controller
            control={control}
            name={`${suffix}.link`}
            render={({ field: { onChange, value } }) => (
              <div>
                <Label label="Link" />
                <Input value={value} onChange={onChange} placeholder="Link" />
              </div>
            )}
          />

          <div className="w-full h-32 rounded border border-dashed border-neutral-400">
            <Controller
              control={control}
              name={`${suffix}.image`}
              render={({ field: { onChange, value } }) => (
                <input
                  type="file"
                  name=""
                  id={`${suffix}.image`}
                  onChange={async (e) => {
                    const file: any = e.target.files;
                    const url = await cdnService.upload(file[0]);
                    onChange(url);
                  }}
                />
              )}
            />
            <label htmlFor={`${suffix}.image`}>
              <FiPlus />
            </label>
          </div>
        </div>
      }
    >
      <div className="w-full relative h-full bg-neutral-300 p-5">
        <div className="w-full h-full absolute left-0 top-0">
          <img
            className="w-full h-full object-fill object-center"
            src={watch(`${suffix}.image`)}
            alt=""
          />
        </div>
        <div className="absolute w-full h-full p-5 left-0 top-0 z-10">
          <p className="mb-4 uppercase text-green-600 text-sm">
            {watch(`${suffix}.sub_title`)}
          </p>
          <h3 className="text-2xl font-semibold text-neutral-700 capitalize w-1/2">
            {watch(`${suffix}.title`)}
          </h3>
          <a
            className="uppercase hover:text-neutral-900 border-b border-green-500 text-xs text-neutral-800 font-medium mt-2 inline-block"
            href="/news/mattis-laoreet-sapien"
          >
            read more
          </a>
        </div>
      </div>
    </Popover>
  );
};

const Hero4 = (props: any) => {
  const {lang} = props;
  const { control, watch, getValues } = useFormContext();
  const suffix = `${lang}.hero[3]`

  return (
    <Popover
      content={
        <div>
          <Controller
            control={control}
            name={`${suffix}.image`}
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
      }
    >
      <div className="w-1/3 h-full bg-neutral-300 ring-1 ring-transparent hover:ring-lime-500">
        <img
          className="w-full h-full object-cover object-center"
          src={watch(`${suffix}.image`)}
        />
      </div>
    </Popover>
  );
};

function HeroBanner(props: any) {
  const {lang} = props;
  return (
    <div className="mt-8">
      <div className="container mx-auto flex flex-col lg:flex-row gap-8 h-auto">
        <Hero1 lang={lang}/>
        <div className="grow w-full lg:w-1/2 h-[26rem] flex flex-col gap-y-8">
          <Hero2 lang={lang} />
          <div className="flex items-stretch w-full h-1/2 gap-8">
            <Hero3 lang={lang} />
            {/* <Hero4 lang={lang} /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroBanner;
