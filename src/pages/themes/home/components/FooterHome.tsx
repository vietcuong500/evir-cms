import React from "react";
import { Link } from "react-router-dom";
import { CiLocationArrow1 } from "react-icons/ci";
import { FiMail, FiSmartphone } from "react-icons/fi";
import {
  Controller,
  useFieldArray,
  useFormContext,
  useWatch,
} from "react-hook-form";
import { Input, Popover } from "antd";

const FooterMain = () => {
  const { control, watch } = useFormContext();

  return (
    <Popover
      content={
        <div className="w-96 px-3 py-3 flex flex-col gap-2">
          <Controller
            control={control}
            name="footer.desc"
            render={({ field: { onChange, value } }) => (
              <Input value={value} onChange={onChange} />
            )}
          />
          <Controller
            control={control}
            name="footer.address"
            render={({ field: { onChange, value } }) => (
              <Input value={value} onChange={onChange} />
            )}
          />
          <Controller
            control={control}
            name="footer.phone"
            render={({ field: { onChange, value } }) => (
              <Input value={value} onChange={onChange} />
            )}
          />
          <Controller
            control={control}
            name="footer.fax"
            render={({ field: { onChange, value } }) => (
              <Input value={value} onChange={onChange} />
            )}
          />
        </div>
      }
    >
      <div className="w-full md:w-1/2 ring-1 ring-transparent hover:ring-lime-500">
        <h4 className="text-3xl font-semibold text-lime-700">Eviromet.</h4>
        <p className="text-neutral-700 mt-2 mb-4 text-sm">
          {watch("footer.desc")}
        </p>
        <ul className="flex flex-col gap-2">
          <li className="flex items-center gap-2 text-sm text-neutral-800">
            <CiLocationArrow1 />
            {watch("footer.address")}
          </li>
          <li className="flex items-center gap-2 text-sm text-neutral-800">
            <FiSmartphone />
            {watch("footer.phone")}
          </li>
          <li className="flex items-center gap-2 text-sm text-neutral-800">
            <FiMail /> {watch("footer.fax")}
          </li>
        </ul>
      </div>
    </Popover>
  );
};

const FooterCol = ({ name }: { name: string }) => {
  const { control, watch } = useFormContext();
  const { fields } = useFieldArray({
    control,
    name: `${name}.menu`,
  });

  const menu = useWatch({
    control,
    name: `${name}.menu`,
  });
  return (
    <Popover
      content={
        <div>
          <Controller
            control={control}
            name={`${name}.title`}
            render={({ field: { onChange, value } }) => (
              <Input value={value} onChange={onChange} />
            )}
          />
          <div>
            {fields.map((el: any, id: number) => (
              <div key={el.id} className="flex items-center gap-2">
                <Controller
                  control={control}
                  name={`${name}.menu[${id}].title`}
                  render={({ field: { onChange, value } }) => (
                    <Input value={value} onChange={onChange} />
                  )}
                />
                <Controller
                  control={control}
                  name={`${name}.menu[${id}].link`}
                  render={({ field: { onChange, value } }) => (
                    <Input value={value} onChange={onChange} />
                  )}
                />
              </div>
            ))}
          </div>
        </div>
      }
    >
      <div className="w-1/3 ring-1 ring-transparent hover:ring-lime-500">
        <p className="uppercase font-medium text-neutral-950">
          {watch(`${name}.title`)}
        </p>
        <ul className="mt-4 flex flex-col gap-3">
          {menu.map((el: any, id: number) => (
            <li
              key={el.id}
              className="text-sm text-neutral-600 hover:text-neutral-950"
            >
              <Link to={el.link}>{el.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </Popover>
  );
};

function FooterHome() {
  const { control, watch } = useFormContext();
  return (
    <div className="py-8">
      <div className="container mx-auto flex flex-col xl:flex-row gap-6">
        <div className="w-full xl:w-1/2 flex flex-col md:flex-row  gap-6">
          <FooterMain />
          <div className="w-full md:w-1/2">
            <p className="uppercase font-medium text-neutral-950">
              Bài viết gần đây
            </p>
            <div className="flex flex-col gap-6 mt-4">
              <div className="flex items-stretch gap-4">
                <div className="w-20 h-14 bg-neutral-100"></div>
                <div className="flex flex-col justify-between">
                  <p className="text-sm text-neutral-950">
                    New home decor from John Doerson
                  </p>
                  <p className="text-xs text-neutral-700">June 16, 2017</p>
                </div>
              </div>
              <div className="flex items-stretch gap-4">
                <div className="w-20 h-14 bg-neutral-100"></div>
                <div className="flex flex-col justify-between">
                  <p className="text-sm text-neutral-950">
                    New home decor from John Doerson
                  </p>
                  <p className="text-xs text-neutral-700">June 16, 2017</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full xl:w-1/2 flex gap-6">
          <FooterCol name="footer.col1" />
          <FooterCol name="footer.col2" />
          <FooterCol name="footer.col3" />
        </div>
      </div>
    </div>
  );
}

export default FooterHome;
