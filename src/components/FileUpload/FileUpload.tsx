import { Button, Modal } from "antd";
import React, { useState } from "react";
import { FiUpload } from "react-icons/fi";
import CardUpload from "./CardUpload";
import ListCartUpload from "./ListCartUpload";

function FileUpload(props: any) {
  const { open, toggle } = props;
  const [files, setFiles] = useState([]);
  return (
    <Modal centered open={open} footer={false} onCancel={toggle}>
      <div className="bg-white shadow rounded min-w-[60rem]">
        <div className="flex border-b border-neutral-100 p-5 items-center justify-between">
          <Button icon={<FiUpload />}>Upload</Button>
        </div>
        <div className="flex h-96">
          <div className="px-5 py-3 overflow-auto w-full">
            <ListCartUpload onChange={(items: any) => setFiles(items)} />
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default FileUpload;
