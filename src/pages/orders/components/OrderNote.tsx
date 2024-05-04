import { Button } from "antd";
import TextArea from "antd/es/input/TextArea";
import React from "react";
import { FiEdit2 } from "react-icons/fi";
import { useToggle } from "react-use";

function OrderNote(props: any) {
  const { note } = props;
  const [isNote, setIsNote] = useToggle(false);
  return (
    <div className="box">
      <div className="box-title flex items-center justify-between">
        <p>Ghi chú</p>
        <Button
          onClick={setIsNote}
          size="small"
          type="text"
          icon={<FiEdit2 />}
        ></Button>
      </div>
      <div className="px-5 py-3">
        {isNote ? (
          <TextArea
            value={note}
            autoSize={{ minRows: 3, maxRows: 5 }}
            placeholder="Nhập ghi chú"
          />
        ) : (
          <p className="text-neutral-800">No note</p>
        )}
      </div>
    </div>
  );
}

export default OrderNote;
