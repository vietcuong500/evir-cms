import { Drawer, Input } from "antd";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import { useToggle } from "react-use";

function TopHead(props: any) {
  const { lang } = props;
  const suffix = `${lang}.top`;
  const { control, watch } = useFormContext();
  const [open, setOpen] = useToggle(false);

  return (
    <>
      <div
        onClick={setOpen}
        className="bg-emerald-600 text-white container mx-auto h-10 text-xs flex items-center justify-between"
      >
        <div className="h-full flex items-center">
          <p className="h-full text-white leading-10 px-4 border-l border-neutral-100/50 cursor-pointer">
            VIETNAM
          </p>
          <p className="h-full text-white leading-10 px-4 border-l border-neutral-100/50">
           {watch(`${suffix}.shipping`)}
          </p>
        </div>

        <div className="h-full flex items-center">
          <ul className="px-4 text-white flex h-full items-center gap-3 border-r border-neutral-100/50">
            <li>
              <FaFacebookF />
            </li>
            <li>
              <FaTwitter />
            </li>
            <li>
              <FaInstagram />
            </li>
            <li>
              <FaYoutube />
            </li>
          </ul>
          <p className="h-full text-white uppercase leading-10 px-4 border-r border-neutral-100/50 cursor-pointer">
            newsletter
          </p>
          <p className="h-full text-white uppercase leading-10 px-4 border-r border-neutral-100/50 cursor-pointer">
            Liên hệ
          </p>
          <p className="h-full text-white uppercase leading-10 px-4 border-r border-neutral-100/50 cursor-pointer">
            faqs
          </p>
        </div>
      </div>
      <Drawer
        title="Top Header"
        onClose={setOpen}
        open={open}
        placement="right"
      >
        <div className="flex flex-col gap-4">
          <Controller
            control={control}
            name={`${suffix}.shipping`}
            render={({ field: { onChange, value } }) => (
              <Input value={value} onChange={onChange} />
            )}
          />
          <Controller
            control={control}
            name={`${suffix}.fb_link`}
            render={({ field: { onChange, value } }) => (
              <Input value={value} onChange={onChange} />
            )}
          />
          <Controller
            control={control}
            name={`${suffix}.tw_link`}
            render={({ field: { onChange, value } }) => (
              <Input value={value} onChange={onChange} />
            )}
          />
          <Controller
            control={control}
            name={`${suffix}.ins_link`}
            render={({ field: { onChange, value } }) => (
              <Input value={value} onChange={onChange} />
            )}
          />
          <Controller
            control={control}
            name={`${suffix}.yt_link`}
            render={({ field: { onChange, value } }) => (
              <Input value={value} onChange={onChange} />
            )}
          />
          <Controller
            control={control}
            name={`${suffix}.newsletter_link`}
            render={({ field: { onChange, value } }) => (
              <Input value={value} onChange={onChange} />
            )}
          />
          <Controller
            control={control}
            name={`${suffix}.contact_link`}
            render={({ field: { onChange, value } }) => (
              <Input value={value} onChange={onChange} />
            )}
          />
          <Controller
            control={control}
            name={`${suffix}.faqs`}
            render={({ field: { onChange, value } }) => (
              <Input value={value} onChange={onChange} />
            )}
          />
        </div>
      </Drawer>
    </>
  );
}

export default TopHead;
