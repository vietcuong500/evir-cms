import React, { useEffect, useState } from "react";
import _ from "lodash";
import CardUpload from "./CardUpload";
import { Button } from "antd";

function ListCartUpload(props: any) {
  const { files, onDelete } = props;
  const [itemsSelected, setItemsSelected] = useState<any>([]);
  // useEffect(() => {
  //   onDelete(itemsSelected);
  // }, [itemsSelected]);
  return (
    <div className="relative h-full">
      <div className="grid grid-cols-5 gap-6 ">
        {files.map((el: any, id: number) => (
          <CardUpload
            key={id}
            src={el}
            onChange={(value: any) => {
              const isExits = itemsSelected.find((it: any) => it === value);
              if (isExits)
                setItemsSelected(
                  itemsSelected.filter((it: any) => it !== value)
                );
              else setItemsSelected([...itemsSelected, value]);
            }}
          />
        ))}
      </div>
      {itemsSelected.length > 0 ? (
        <div className="absolute bg-blue-600 flex items-center justify-between rounded py-2 px-4 shadow w-full left-0 bottom-0">
          <p className="text-white font-medium">
            {itemsSelected.length} files selected
          </p>
          <Button
            onClick={() => {
              onDelete(itemsSelected);
              setItemsSelected([]);
            }}
          >
            Remove
          </Button>
        </div>
      ) : null}
    </div>
  );
}

export default ListCartUpload;
