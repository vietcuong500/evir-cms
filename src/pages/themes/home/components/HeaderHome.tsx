import { Drawer, Input, Popover } from "antd";
import { Controller, useFormContext } from "react-hook-form";
import { RiPhoneFill } from "react-icons/ri";
import { useToggle } from "react-use";

function HeaderHome(props: any) {
  const { control, watch } = useFormContext();
  const [open, setOpen] = useToggle(false);
  const {lang} = props;
  const suffix = `${lang}.header`;
  return (
    <div>
      <div
        onClick={setOpen}
        className="block ring-1 ring-transparent hover:ring-lime-500 border-b border-neutral-100"
      >
        <div className="text-sm py-4 container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-3 text-neutral-800">
              <RiPhoneFill className="w-8 h-8 text-green-600" />
              <div>
                <p className="font-medium">{watch(`${suffix}.title1`)}</p>
                <span className="text-neutral-500 font-light">
                  {watch(`${suffix}.desc1`)}
                </span>
              </div>
            </div>
            <div>
              <p className="font-medium">{watch(`${suffix}.title2`)}</p>
              <span className="text-neutral-500 font-light">
                {watch(`${suffix}.desc2`)}
              </span>
            </div>
          </div>
        </div>
      </div>
      <Drawer title="Header" onClose={setOpen} open={open} placement="right">
        <div className="flex flex-col gap-4">
          <Controller
            control={control}
            name={`${suffix}.title1`}
            render={({ field: { onChange, value } }) => (
              <Input value={value} onChange={onChange} />
            )}
          />
          <Controller
            control={control}
            name={`${suffix}.desc1"`}            render={({ field: { onChange, value } }) => (
              <Input value={value} onChange={onChange} />
            )}
          />
          <Controller
            control={control}
            name={`${suffix}.title2`}
            render={({ field: { onChange, value } }) => (
              <Input value={value} onChange={onChange} />
            )}
          />
          <Controller
            control={control}
            name={`${suffix}.desc2"`}            render={({ field: { onChange, value } }) => (
              <Input value={value} onChange={onChange} />
            )}
          />
        </div>
      </Drawer>
    </div>
  );
}

export default HeaderHome;
