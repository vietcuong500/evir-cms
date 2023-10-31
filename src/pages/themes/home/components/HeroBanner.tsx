import { Input, Popover } from "antd";
import Label from "components/Label/Label";
import cdnConfig from "config/cdnConfig";
import React from "react";
import { Controller, useForm, useFormContext } from "react-hook-form";
import { FiPlus } from "react-icons/fi";
import { useThemes } from "../modules/HomePage";

const Hero1 = () => {
  const { control, watch } = useFormContext();
  return (
    <Popover
      trigger="click"
      placement="bottom"
      content={
        <div className="p-5 flex flex-col gap-4 w-72">
          <Controller
            control={control}
            name="hero[0].sub_title"
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
            name="hero[0].title"
            render={({ field: { onChange, value } }) => (
              <div>
                <Label label="Title" />
                <Input value={value} onChange={onChange} placeholder="Title" />
              </div>
            )}
          />
          <Controller
            control={control}
            name="hero[0].link"
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
              name="hero[0].image"
              render={({ field: { onChange, value } }) => (
                <input
                  type="file"
                  name=""
                  id="hero[0].image"
                  onChange={async (e) => {
                    const formData = new FormData();
                    const file: any = e.target.files;
                    if (file[0]) {
                      formData.append("file", file[0]);

                      const res: any = await cdnConfig.post(
                        "uploadFile",
                        formData
                      );
                      if (res) {
                        onChange(res.fileDownloadUri);
                      }
                    }
                  }}
                />
              )}
            />
            <label htmlFor="hero[0].image">
              <FiPlus />
            </label>
          </div>
        </div>
      }
    >
      <div className="grow w-full lg:w-1/2 h-[26rem] cursor-pointer hover:shadow-xl relative">
        <div className="absolute w-full h-full left-0 top-0 bg-slate-300">
          <img
            className="w-full h-full object-cover object-center"
            src={watch("hero[0].image")}
            alt=""
          />
        </div>
        <div className="absolute w-full h-full left-0 top-0 z-10 p-8">
          <p className="mb-6 uppercase text-green-600 text-sm">
            {watch("hero[0].sub_title")}
          </p>
          <h3 className="text-4xl font-semibold text-neutral-700 capitalize w-1/4">
            {watch("hero[0].title")}
          </h3>
          <a
            className="uppercase hover:text-neutral-900 border-b border-green-500 text-sm text-neutral-800 font-medium mt-4 inline-block"
            href={watch("hero[0].link")}
          >
            read more
          </a>
        </div>
      </div>
    </Popover>
  );
};

const Hero2 = () => {
  const { control, watch } = useFormContext();
  return (
    <Popover
      trigger="click"
      placement="bottom"
      content={
        <div className="p-5 flex flex-col gap-4 w-72">
          <Controller
            control={control}
            name="hero[1].sub_title"
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
            name="hero[1].title"
            render={({ field: { onChange, value } }) => (
              <div>
                <Label label="Title" />
                <Input value={value} onChange={onChange} placeholder="Title" />
              </div>
            )}
          />
          <Controller
            control={control}
            name="hero[1].link"
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
              name="hero[1].image"
              render={({ field: { onChange, value } }) => (
                <input
                  type="file"
                  name=""
                  id="hero[1].image"
                  onChange={async (e) => {
                    const formData = new FormData();
                    const file: any = e.target.files;
                    if (file[0]) {
                      formData.append("file", file[0]);

                      const res: any = await cdnConfig.post(
                        "uploadFile",
                        formData
                      );
                      if (res) {
                        onChange(res.fileDownloadUri);
                      }
                    }
                  }}
                />
              )}
            />
            <label htmlFor="hero[1].image">
              <FiPlus />
            </label>
          </div>
        </div>
      }
    >
      <div className="h-1/2 w-full relative bg-neutral-300 p-5">
        <div className="absolute w-full h-full left-0 top-0">
          <img
            className="w-full h-full object-cover object-center"
            src={watch("hero[1].image")}
          />
        </div>
        <div className="w-full h-full absolute z-10 p-5 left-0 top-0">
          <p className="mb-4 uppercase text-green-600 text-sm">
            {watch("hero[1].sub_title")}
          </p>
          <h3 className="text-2xl font-semibold text-neutral-700 capitalize w-1/3">
            {watch("hero[1].title")}
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

const Hero3 = () => {
  const { watch, control } = useFormContext();
  return (
    <Popover
      trigger="click"
      placement="bottom"
      content={
        <div className="p-5 flex flex-col gap-4 w-72">
          <Controller
            control={control}
            name="hero[2].sub_title"
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
            name="hero[2].title"
            render={({ field: { onChange, value } }) => (
              <div>
                <Label label="Title" />
                <Input value={value} onChange={onChange} placeholder="Title" />
              </div>
            )}
          />
          <Controller
            control={control}
            name="hero[2].link"
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
              name="hero[2].image"
              render={({ field: { onChange, value } }) => (
                <input
                  type="file"
                  name=""
                  id="hero[2].image"
                  onChange={async (e) => {
                    const formData = new FormData();
                    const file: any = e.target.files;
                    if (file[0]) {
                      formData.append("file", file[0]);

                      const res: any = await cdnConfig.post(
                        "uploadFile",
                        formData
                      );
                      if (res) {
                        onChange(res.fileDownloadUri);
                      }
                    }
                  }}
                />
              )}
            />
            <label htmlFor="hero[2].image">
              <FiPlus />
            </label>
          </div>
        </div>
      }
    >
      <div className="w-2/3 relative h-full bg-neutral-300 p-5">
        <div className="w-full h-full absolute left-0 top-0">
          <img className="w-full h-full object-fill object-center" src={watch("hero[2].image")} alt="" />
        </div>
        <div className="absolute w-full h-full p-5 left-0 top-0 z-10">
          <p className="mb-4 uppercase text-green-600 text-sm">
            {watch("hero[2].sub_title")}
          </p>
          <h3 className="text-2xl font-semibold text-neutral-700 capitalize w-1/2">
            {watch("hero[2].title")}
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

function HeroBanner() {
  const { setOpenEditor } = useThemes();
  const { control, watch, getValues } = useFormContext();
  return (
    <div className="mt-8">
      <div className="container mx-auto flex flex-col lg:flex-row gap-8 h-auto">
        <Hero1 />
        <div className="grow w-full lg:w-1/2 h-[26rem] flex flex-col gap-y-8">
          <Hero2 />
          <div className="flex items-stretch w-full h-1/2 gap-8">
            <Hero3 />
            <div className="w-1/3 h-full bg-neutral-300"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroBanner;
