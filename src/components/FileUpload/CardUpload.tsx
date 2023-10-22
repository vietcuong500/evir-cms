import React from "react";
import { useToggle } from "react-use";
import classNames from "classnames";

function CardUpload(props: any) {
  const { onChange } = props;
  const [checked, setChecked] = useToggle(false);
  return (
    <div
      onClick={() => {
        setChecked();
        onChange({
          name: "klsadj",
        });
      }}
      className={classNames({
        "w-full rounded shadow cursor-pointer transition-all duration-200 border":
          true,
        "border-transparent": !checked,
        "border-blue-800": checked,
      })}
    >
      <div className="w-full h-28 bg-neutral-100"></div>
      <div className="p-2 text-neutral-700">
        <p className="text-sm">meadow.jpg</p>
        <p className="text-xs">10/09/2023 3:21AM</p>
      </div>
    </div>
  );
}

export default CardUpload;
