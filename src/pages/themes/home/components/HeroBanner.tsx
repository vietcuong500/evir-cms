import { Input, Popover } from "antd";
import React from "react";
import { useThemes } from "../modules/HomePage";

function HeroBanner() {
  const { setOpenEditor } = useThemes();
  return (
    <div className="mt-8">
      <div className="container mx-auto flex flex-col lg:flex-row gap-8 h-auto">
        <Popover
          trigger="click"
          placement="bottom"
          content={
            <div className="p-5 flex flex-col gap-4 w-72">
              <Input placeholder="Subtitle" />
              <Input placeholder="Title" />
              <Input placeholder="link" />
              <div className="w-full h-32 rounded border border-dashed border-neutral-400"></div>
            </div>
          }
        >
          <div className="grow w-full lg:w-1/2 h-[26rem] bg-neutral-300 p-8 cursor-pointer hover:shadow-xl">
            <p className="mb-6 uppercase text-green-600 text-sm">
              mattis laoreet sapien
            </p>
            <h3 className="text-4xl font-semibold text-neutral-700 capitalize w-1/4">
              porta consectetur imperdiet frigilla
            </h3>
            <a
              className="uppercase hover:text-neutral-900 border-b border-green-500 text-sm text-neutral-800 font-medium mt-4 inline-block"
              href="/news/mattis-laoreet-sapien"
            >
              read more
            </a>
          </div>
        </Popover>

        <div className="grow w-full lg:w-1/2 h-[26rem] flex flex-col gap-y-8">
          <div className="h-1/2 w-full bg-neutral-300 p-5">
            <p className="mb-4 uppercase text-green-600 text-sm">semper</p>
            <h3 className="text-2xl font-semibold text-neutral-700 capitalize w-1/3">
              feugiat scelerique imperdiet
            </h3>
            <a
              className="uppercase hover:text-neutral-900 border-b border-green-500 text-xs text-neutral-800 font-medium mt-2 inline-block"
              href="/news/mattis-laoreet-sapien"
            >
              read more
            </a>
          </div>
          <div className="flex items-stretch w-full h-1/2 gap-8">
            <div className="w-2/3 h-full bg-neutral-300 p-5">
              <p className="mb-4 uppercase text-green-600 text-sm">semper</p>
              <h3 className="text-2xl font-semibold text-neutral-700 capitalize w-1/2">
                adipiscing sodales
              </h3>
              <a
                className="uppercase hover:text-neutral-900 border-b border-green-500 text-xs text-neutral-800 font-medium mt-2 inline-block"
                href="/news/mattis-laoreet-sapien"
              >
                read more
              </a>
            </div>
            <div className="w-1/3 h-full bg-neutral-300"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroBanner;
