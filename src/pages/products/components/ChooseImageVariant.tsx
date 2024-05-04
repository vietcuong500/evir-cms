import { Button, Modal } from "antd";
import React from "react";

function ChooseImageVariant(props: any) {
  const { open, toggle } = props;
  return (
    <Modal open={open} onOk={toggle} onCancel={toggle} footer={false}>
      <div className="box-title bg-neutral-100 rounded">
        <p>Upload Image For Variant</p>
      </div>
      <div className="px-5 py-3">
        <div className="flex items-center justify-between border-b border-neutral-100 pb-3">
          <p className="text-neutral-700">Chọn ảnh cho sản phẩm</p>
          <Button type="dashed">Upload Image</Button>
        </div>

        <div className="my-3">
          <div className="cursor-pointer w-20 h-24 border border-neutral-300 rounded hover:bg-neutral-200"></div>
        </div>
      </div>
      <div className="px-5 py-3 flex items-center justify-end gap-4 border-t border-neutral-100">
        <Button>Hủy</Button>
        <Button type="primary" >Hoàn thành</Button>
      </div>
    </Modal>
  );
}

export default ChooseImageVariant;
