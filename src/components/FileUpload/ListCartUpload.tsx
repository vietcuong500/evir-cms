import React, { useEffect, useState } from "react";
import _ from "lodash";
import classNames from "classnames";
import { v4 as uuidv4 } from "uuid";
import CardUpload from "./CardUpload";
import { Button } from "antd";

const items = _.range(0, 5).map((el) => ({ id: uuidv4() }));

function ListCartUpload(props: any) {
  const { onChange } = props;
  const [itemsSelected, setItemsSelected] = useState<any>([]);
  useEffect(() => {
    onChange(itemsSelected);
  }, [itemsSelected]);
  return (
    <div className="relative">
      <div className="grid grid-cols-5 gap-6 ">
        {items.map((el, id) => (
          <CardUpload
            key={id}
            onChange={() => {
              const isExits = itemsSelected.find((it: any) => it.id === el.id);
              if (isExits)
                setItemsSelected(
                  itemsSelected.filter((it: any) => it.id !== el.id)
                );
              else setItemsSelected([...itemsSelected, el]);
            }}
          />
        ))}
      </div>
      <div className="sticky bg-blue-600 flex items-center justify-between rounded py-2 px-4 shadow w-full left-0 bottom-0">
        <p className="text-white font-medium">
          {itemsSelected.length} files selected
        </p>
        <Button>Using</Button>
      </div>
    </div>
  );
}

export default ListCartUpload;
