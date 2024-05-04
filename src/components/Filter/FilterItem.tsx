import { Button, Checkbox, Popover } from "antd";
import { useState } from "react";
import { OptionModel } from "./types";
import "./filter.scss";

export function FilterItem(props: any) {
  const { item, onChange, values } = props;
  const [anchor, setAnchor] = useState(null);
  const handleClick = (e: any) => setAnchor(e.currentTarget);
  const handleClose = () => setAnchor(null);
  const openMenu = Boolean(anchor);
  const [selected, setSelected] = useState<any>([...values]);
  const handleSubmit = () => {
    onChange({ ...item, selected });
    handleClose();
  };
  return (
    <div className="w-full">
      <Popover
        style={{
          padding: 0,
        }}
        className="popover-filteritem"
        trigger="click"
        placement="right"
        content={
          <div className="">
            <div>
              {item.options.map((option: OptionModel, optionId: number) => (
                <div
                  key={optionId}
                  className="flex px-3 items-center justify-between hover:bg-stone-50"
                >
                  <label
                    htmlFor={option.value}
                    className={`px-3 py-2 block w-[160px] cursor-pointer ${
                      selected.find((el: any) => el.value === option.value)
                        ? ""
                        : ""
                    }`}
                  >
                    {option.label}
                  </label>
                  <Checkbox
                    className="transition duration-300"
                    // icon={<FiCheck className="opacity-0" />}
                    //checkedIcon={<FiCheck className="!text-blue-700" />}
                    id={option.value}
                    value={option.value}
                    onChange={(e) => {
                      if (e.target.checked) setSelected([...selected, option]);
                      else
                        setSelected(
                          selected.filter(
                            (el: any) => el.value !== e.target.value
                          )
                        );
                    }}
                    checked={selected
                      .map((el: any) => el.value)
                      .includes(option.value)}
                  />
                </div>
              ))}
            </div>
            <div className="flex shadow flex-row items-center gap-4 justify-between px-4 py-2 mt-2">
              <Button
                type="text"
                className="text-gray-500 font-semibold"
                onClick={handleClose}
              >
                Hủy
              </Button>
              <Button
                className="px-3 py-1 rounded bg-blue-100 text-blue-500 font-semibold"
                onClick={handleSubmit}
              >
                Áp dụng
              </Button>
            </div>
          </div>
        }
      >
        <div
          onClick={handleClick}
          className="px-3 py-1 cursor-pointer hover:bg-neutral-100 w-full ml-auto justify-between"
        >
          {item.title}
        </div>
      </Popover>
    </div>
  );
}
